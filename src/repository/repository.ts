import { Repo__factory, Repo } from "../typechain/index.js";
import { ethers } from "ethers";
import { valid, parse } from "semver";
import * as isIPFS from "is-ipfs";
import {
  ApmRepoVersionReturn,
  ApmVersionRaw,
  IpfsClientTarget,
  PkgRelease,
  FileConfig,
  FileFormat,
  NodeArch,
  DistributedFile,
} from "./types.js";
import { CID, IPFSHTTPClient, create } from "ipfs-http-client";
import { CarReader } from "@ipld/car";
import { Block } from "ipfs-car";
import { recursive as exporter } from "ipfs-unixfs-exporter";
import { IPFSEntry } from "ipfs-core-types/src/root.js";
import { Version } from "multiformats";
import path, { isAbsolute } from "path";
import fs from "fs";
import stream from "stream";
import util from "util";
import {
  Architecture,
  Manifest,
  defaultArch,
  getImagePath,
  getLegacyImagePath,
  releaseFiles,
  releaseFilesToDownload,
} from "@dappnode/types";
import YAML from "yaml";
import os from "os";

const source = "ipfs" as const;

/**
 * The DappnodeRepository is a class that allows to interact with the Dappnode repository smart contract as well as:
 * - Resolve dependencies for a given package
 * - Fetches specific version of a package
 * - Fetches all version of a package
 * - Checks if a package exists (is published)
 * - Resolves a name and version of a package to an IPFS hash
 * - Gets the release assets for a request (pkg name and version)
 * - Gets the release and its dependencies assets for a request (pkg name and version)
 * - Get manifest for a given package
 */
export class DappnodeRepository {
  ethProvider: ethers.providers.Provider;
  dnpName: string;
  ipfs: IPFSHTTPClient;
  ipfsClientTarget: IpfsClientTarget;
  repoContract: Repo | undefined;

  constructor(
    ethProvider: ethers.providers.Provider,
    dnpName: string,
    ipfsUrl: string,
    ipfsClientTarget: IpfsClientTarget
  ) {
    this.ethProvider = ethProvider;
    // Only accept ENS names under the dnp.dappnode.eth and public.dappnode.eth domains
    if (!dnpName.endsWith(".dappnode.eth"))
      throw Error(`Invalid dnpName ${dnpName}`);
    this.dnpName = dnpName;
    this.ipfs = create({ url: ipfsUrl, timeout: 30 * 1000 });
    this.ipfsClientTarget = ipfsClientTarget;
  }

  public changeIpfsProviderAndTarget(
    ipfsUrl: string,
    ipfsClientTarget: IpfsClientTarget
  ): void {
    this.ipfs = create({ url: ipfsUrl, timeout: 30 * 1000 });
    this.ipfsClientTarget = ipfsClientTarget;
  }

  /**
   * Initialize the instance by resolving the dnpName ENS to the smart contract address
   * verifying that it resolves to a valid DappNodePackageDirectory contract
   */
  private async getRepoContract(): Promise<Repo> {
    const contractAddress = await this.ethProvider.resolveName(this.dnpName);
    if (!contractAddress)
      throw new Error(`Could not resolve name ${this.dnpName}`);

    const repoContract = Repo__factory.connect(
      contractAddress,
      this.ethProvider
    );
    this.repoContract = repoContract;
    return repoContract;
  }

  /**
   * Get version and ipfs hash of a package. If the version is not specified, it will return the latest version
   */
  public async getVersionAndIpfsHash(version?: string): Promise<ApmVersionRaw> {
    if (!this.repoContract) this.repoContract = await this.getRepoContract();
    this.repoContract;
    const res =
      version && valid(version)
        ? await this.repoContract.getBySemanticVersion(
            this.toApmVersionArray(version)
          )
        : await this.repoContract.getLatest();
    return this.parseApmVersionReturn(res);
  }

  /**
   * Get all the assets for a request
   */
  public async getPkgRelease(_version?: string): Promise<PkgRelease> {
    if (!this.repoContract) this.repoContract = await this.getRepoContract();
    const { version, contentUri } = await this.getVersionAndIpfsHash(_version);
    if (!isIPFS.cid(this.sanitizeIpfsPath(contentUri)))
      throw Error(`Invalid IPFS hash ${contentUri}`);

    const ipfsEntries = await this.list(contentUri);
    // Get manifest
    if (!this.isDirectoryRelease(ipfsEntries))
      throw Error(`Invalid pkg release ${contentUri}, manifest not found`);

    const manifest = await this.getPkgAsset<Manifest>(
      releaseFilesToDownload.manifest,
      this.getAssetIpfsEntry(
        ipfsEntries,
        releaseFilesToDownload.manifest
      )?.cid.toString() || ""
    );
    const avatar = this.getAssetIpfsEntry(ipfsEntries, releaseFiles.avatar);
    return {
      imageFile: this.getImageByArch(
        manifest,
        ipfsEntries,
        "x64" //os.arch() as NodeArch
      ),
      avatarFile: avatar
        ? { hash: avatar.cid.toString(), size: avatar.size, source }
        : undefined,
      manifest,
      compose: await this.getPkgAsset(
        releaseFilesToDownload.compose,
        this.getAssetIpfsEntry(
          ipfsEntries,
          releaseFilesToDownload.compose
        )?.cid.toString() || ""
      ),
      signature: ipfsEntries.find((ipfsEntry) =>
        releaseFilesToDownload.signature.regex.test(ipfsEntry.name)
      )
        ? await this.getPkgAsset(
            releaseFilesToDownload.signature,
            this.getAssetIpfsEntry(
              ipfsEntries,
              releaseFilesToDownload.manifest
            )?.cid.toString() || ""
          )
        : undefined,
      disclaimer: await this.getPkgAsset(
        releaseFilesToDownload.disclaimer,
        this.getAssetIpfsEntry(
          ipfsEntries,
          releaseFilesToDownload.manifest
        )?.cid.toString() || ""
      ),
      gettingStarted: await this.getPkgAsset(
        releaseFilesToDownload.gettingStarted,
        this.getAssetIpfsEntry(
          ipfsEntries,
          releaseFilesToDownload.manifest
        )?.cid.toString() || ""
      ),
      prometheusTargets: await this.getPkgAsset(
        releaseFilesToDownload.prometheusTargets,
        this.getAssetIpfsEntry(
          ipfsEntries,
          releaseFilesToDownload.manifest
        )?.cid.toString() || ""
      ),
      grafanaDashboards: await this.getPkgAsset(
        releaseFilesToDownload.grafanaDashboards,
        this.getAssetIpfsEntry(
          ipfsEntries,
          releaseFilesToDownload.manifest
        )?.cid.toString() || ""
      ),
    };
  }

  /**
   * Get a given release asset for a request
   */
  public async getPkgAsset<T>(config: FileConfig, hash: string): Promise<T> {
    if (!hash && config.required)
      throw Error(`Asset required but hash missing`);
    const { maxSize: maxLength, format } = config;
    const content = await this.writeFileToMemory(hash, maxLength);
    // TODO: validate content with JSON schema
    return this.parseAsset<T>(content, format);
  }

  /** ==== */
  /** IPFS */
  /** ==== */

  /**
   * FOR IPFS API use standard endpoints: cat, ls, get, etc
   * FOR IPFS GATEWAY use dag endpoints
   */

  /**
   * Downloads and parses buffer to UTF8. Used for small files
   * @see catString
   * @see catCarReaderToMemory
   */
  private async writeFileToMemory(
    hash: string,
    maxLength?: number
  ): Promise<string> {
    const chunks = [];
    if (this.ipfsClientTarget === IpfsClientTarget.api) {
      for await (const chunk of this.ipfs.cat(hash, {
        length: maxLength,
      }))
        chunks.push(chunk);
    } else {
      const blocksIterable: AsyncIterable<Block> = (
        await this.getAndVerifyContentFromGateway(hash)
      ).carReader.blocks();
      for await (const block of blocksIterable) chunks.push(block.bytes);
    }
    const buffer = Buffer.concat(chunks);
    if (maxLength && buffer.length >= maxLength)
      throw Error(`Maximum size ${maxLength} bytes exceeded`);
    return buffer.toString("utf8");
  }

  /**
   * Directly write the stream to the fs. Used for big files
   * such as docker images
   * @param args
   */
  private async writeFileToFs({
    hash,
    path,
    timeout,
    fileSize,
    progress,
  }: {
    hash: string;
    path: string;
    timeout?: number;
    fileSize?: number;
    progress?: (n: number) => void;
  }): Promise<void> {
    let readable: AsyncIterable<Uint8Array>;
    if (this.ipfsClientTarget === IpfsClientTarget.api)
      readable = this.ipfs.cat(hash, { timeout, length: fileSize });
    else {
      const { carReader, root } = await this.getAndVerifyContentFromGateway(
        hash
      );
      readable = await this.unpackCarReader(carReader, root);
    }

    return new Promise(async (resolve, reject): Promise<void> => {
      if (!path || path.startsWith("/ipfs/") || !isAbsolute("/"))
        reject(Error(`Invalid path: "${path}"`));

      const asyncIterableArray: Uint8Array[] = [];

      // Timeout cancel mechanism
      const timeoutToCancel = setTimeout(() => {
        reject(Error(`Timeout downloading ${hash}`));
      }, timeout || 30 * 1000);

      let totalData = 0;
      let previousProgress = -1;
      const resolution = 1;
      const round = (n: number): number =>
        resolution * Math.round((100 * n) / resolution);

      const onData = (chunk: Uint8Array): void => {
        clearTimeout(timeoutToCancel);
        totalData += chunk.length;
        asyncIterableArray.push(chunk);
        if (progress && fileSize) {
          const currentProgress = round(totalData / fileSize);
          if (currentProgress !== previousProgress) {
            progress(currentProgress);
            previousProgress = currentProgress;
          }
        }
      };

      const onFinish = (): void => {
        clearTimeout(timeoutToCancel);
        resolve();
      };

      const onError =
        (streamId: string) =>
        (err: Error): void => {
          clearTimeout(timeoutToCancel);
          reject(Error(streamId + ": " + err));
        };

      try {
        for await (const chunk of readable) onData(chunk);

        const writable = fs.createWriteStream(path);
        await util.promisify(stream.pipeline)(
          stream.Readable.from(asyncIterableArray),
          writable
        );
        onFinish();
      } catch (e) {
        onError("Error writing to fs")(e as Error);
      }
    });
  }

  /**
   * List items contained in a CID hash.
   * - LOCAL: ipfs.ls
   * - REMOTE: ipfs.dag.get => created a fake mock that returns same data structure
   * @param hash
   */
  async list(hash: string): Promise<IPFSEntry[]> {
    const files: IPFSEntry[] = [];
    if (this.ipfsClientTarget === IpfsClientTarget.api)
      for await (const file of this.ipfs.ls(hash)) files.push(file);
    else {
      const dagGet = await this.ipfs.dag.get(
        CID.parse(this.sanitizeIpfsPath(hash))
      );
      if (dagGet.value.Links)
        for (const link of dagGet.value.Links)
          files.push({
            type: "file",
            cid: CID.parse(this.sanitizeIpfsPath(link.Hash.toString())),
            name: link.Name,
            path: path.join(link.Hash.toString(), link.Name),
            size: link.Size,
          });
      else throw Error(`Invalid IPFS hash ${hash}`);
    }

    return files;
  }

  /**
   * Gets content and verify it from an IPFS GATEWAY using
   */
  private async getAndVerifyContentFromGateway(hash: string): Promise<{
    carReader: CarReader;
    root: CID<unknown, number, number, Version>;
  }> {
    const cid = CID.parse(this.sanitizeIpfsPath(hash));
    const asynciterable = this.ipfs.dag.export(cid);
    const carReader = await CarReader.fromIterable(asynciterable);
    const roots = await carReader.getRoots();
    const root = roots[0];
    if (cid !== root)
      throw Error(`UNTRUSTED CONTENT: Invalid root CID ${root} for ${cid}`);

    return { carReader, root };
  }

  /**
   * Unpack a car reader and returns an async iterable of uint8arrays
   */
  private async unpackCarReader(
    carReader: CarReader,
    root: CID<unknown, number, number, Version>
  ): Promise<AsyncIterable<Uint8Array>> {
    const iterable: AsyncIterable<Uint8Array>[] = [];

    const entries = exporter(root, {
      async get(cid) {
        const block = await carReader.get(cid);
        if (!block) throw Error(`Could not get block ${cid}`);
        return block.bytes;
      },
    });

    for await (const entry of entries) {
      if (entry.type === "file") iterable.push(entry.content());
      else throw Error(`Expexted type: file, got: ${entry.type}`);
    }
    if (iterable.length > 1)
      throw Error(`Unexpected number of files. There must be only one`);

    return iterable[0];
  }

  /**
   * Check if the IPFS path is a root directory
   * by detecting the manifest in the files
   * @param ipfsEntries IPFS files
   */
  private async isDirectoryRelease(ipfsEntries: IPFSEntry[]): Promise<boolean> {
    return ipfsEntries.some((file) =>
      releaseFiles.manifest.regex.test(file.name)
    );
  }

  /**
   * Gets an IPFS entry for a given release file given a release file config
   * If the ipfsEntry is not found and its required, it throws an error
   * If the ipfsEntry is not found and its not required, it returns undefined
   *
   * The return type must ensure that the file is not undefined if required
   * omit F
   */
  private getAssetIpfsEntry(
    ipfsEntries: IPFSEntry[],
    fileConfig: Omit<FileConfig, "format">
  ): IPFSEntry | undefined {
    const { regex, required } = fileConfig;
    const entry = ipfsEntries.find((file) => regex.test(file.name));
    if (!entry && required) throw Error(`Missing required file ${regex}`);
    return entry;
  }

  /** ==== */
  /** IPFS */
  /** ==== */

  /** ===== */
  /** UTILS */
  /** ===== */

  private getImageByArch(
    manifest: Manifest,
    files: IPFSEntry[],
    nodeArch: NodeArch
  ): DistributedFile {
    let arch: Architecture;
    switch (nodeArch) {
      case "arm":
      case "arm64":
        arch = "linux/arm64";
        break;
      case "x64":
        arch = "linux/amd64";
        break;
      default:
        arch = defaultArch;
        break;
    }

    const { name, version } = manifest;
    const imageAsset =
      files.find((file) => file.name === getImagePath(name, version, arch)) ||
      (arch === defaultArch
        ? // New DAppNodes should load old single arch packages,
          // and consider their single image as amd64
          files.find((file) => file.name === getLegacyImagePath(name, version))
        : undefined);

    if (!imageAsset) {
      throw Error(
        `No image for architecture '${nodeArch}'. ${
          manifest.architectures && manifest.architectures.includes(arch)
            ? `image for ${arch} is missing in release`
            : undefined
        }`
      );
    } else {
      return {
        hash: imageAsset.cid.toString(),
        size: imageAsset.size,
        source, // TODO: consdier adding different sources
      };
    }
  }

  private parseAsset<T>(data: string, format: FileFormat): T {
    switch (format) {
      case FileFormat.YAML:
        try {
          const parsedData = YAML.parse(data);
          if (!parsedData || typeof parsedData === "string")
            throw Error(`returned invalid object`);
          return parsedData as T;
        } catch (e: any) {
          throw Error(`Error parsing YAML: ${e.message}`);
        }
      case FileFormat.JSON:
        try {
          return JSON.parse(data);
        } catch (e: any) {
          throw Error(`Error parsing JSON: ${e.message}`);
        }
      case FileFormat.TEXT:
        return data as T;
      default:
        throw Error(`Attempting to parse unknown format ${format}`);
    }
  }

  private sanitizeIpfsPath(ipfsPath: string): string {
    if (ipfsPath.includes("ipfs")) return ipfsPath.replace("/ipfs/", "");
    return ipfsPath;
  }

  /**
   * Return a semantic version string into the APM version array format
   * @param version "0.2.4"
   */
  private toApmVersionArray(version: string): [number, number, number] {
    const semverObj = parse(version);
    if (!semverObj) throw Error(`Invalid semver ${version}`);
    return [semverObj.major, semverObj.minor, semverObj.patch];
  }

  /**
   * Parse a raw version response from an APM repo
   */
  private parseApmVersionReturn(res: ApmRepoVersionReturn): {
    version: string;
    contentUri: string;
  } {
    if (!Array.isArray(res.semanticVersion))
      throw Error(`property 'semanticVersion' must be an array`);
    return {
      version: res.semanticVersion.join("."),
      // Second argument = true: ignore UTF8 parsing errors
      // Let downstream code identify the content hash as wrong
      contentUri: ethers.utils.toUtf8String(res.contentURI),
    };
  }

  /** ===== */
  /** UTILS */
  /** ===== */
}
