import { ethers } from "ethers";
import { valid, parse } from "semver";
import { Repo__factory, Repo } from "../typechain/index.js";
import { ApmRepoVersionReturn, ApmVersionRaw } from "./types.js";

export class ApmRepository {
  protected ethProvider: ethers.providers.Provider;
  constructor(ethProvider: ethers.providers.Provider) {
    this.ethProvider = ethProvider;
  }

  /**
   * Initialize the instance by resolving the dnpName ENS to the smart contract address
   * verifying that it resolves to a valid DappNodePackageDirectory contract
   */
  private async getRepoContract(dnpName: string): Promise<Repo> {
    const contractAddress = await this.ethProvider.resolveName(
      this.ensureValidDnpName(dnpName)
    );
    if (!contractAddress) throw new Error(`Could not resolve name ${dnpName}`);
    return Repo__factory.connect(contractAddress, this.ethProvider);
  }

  /**
   * Get version and ipfs hash of a package. If the version is not specified, it will return the latest version
   */
  public async getVersionAndIpfsHash({
    dnpName,
    version,
  }: {
    dnpName: string;
    version?: string;
  }): Promise<ApmVersionRaw> {
    const repoContract = await this.getRepoContract(dnpName);
    const res =
      version && valid(version)
        ? await repoContract.getBySemanticVersion(
            this.toApmVersionArray(version)
          )
        : await repoContract.getLatest();
    return this.parseApmVersionReturn(res);
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

  /**
   * Ensure dnp name ends under valid registries: dnp.dappnode.eth or public.dappnode.eth
   */
  private ensureValidDnpName(dnpName: string): string {
    if (!dnpName.endsWith(".dappnode.eth"))
      throw Error(`Invalid dnpName ${dnpName}`);
    return dnpName;
  }
}
