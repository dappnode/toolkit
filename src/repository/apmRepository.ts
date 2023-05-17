import { ethers } from "ethers";
import { valid, parse } from "semver";
import { Repo__factory, Repo } from "../typechain/index.js";
import { ApmRepoVersionReturn, ApmVersionRaw } from "./types.js";

/**
 * ApmRepository is a class to interact with the DAppNode APM Repository Contract.
 */
export class ApmRepository {
  private ethProvider: ethers.Provider;

  /**
   * Class constructor
   * @param ethProvider - The ethers provider to interact with the Ethereum network.
   */
  constructor(ethProvider: ethers.Provider) {
    this.ethProvider = ethProvider;
  }

  /**
   * Fetches the smart contract address for the given DNP name
   * by resolving the ENS name.
   * Verifies that it resolves to a valid DappNodePackageDirectory contract.
   * @param dnpName - The name of the DNP to resolve.
   * @returns - A promise that resolves to the Repo instance.
   */
  public async getRepoContract(dnpName: string): Promise<Repo> {
    const contractAddress = await this.ethProvider.resolveName(
      this.ensureValidDnpName(dnpName)
    );
    if (!contractAddress) throw new Error(`Could not resolve name ${dnpName}`);
    return Repo__factory.connect(contractAddress, this.ethProvider);
  }

  /**
   * Fetches the version and IPFS hash of a package.
   * If the version is not specified, it returns the latest version.
   * @param dnpName - The name of the DNP.
   * @param version - The version of the DNP (optional).
   * @returns - A promise that resolves to the raw APM version.
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

    return this.parseApmVersionReturn({
      semanticVersion: res[0].map((v) => parseInt(v.toString())),
      contractAddress: res[1],
      contentURI: res[2],
    });
  }

   /**
   * Get the registry contract for an ENS domain and the registry ABI.
   * It will slice the first subdomain and query the rest as the registry domain.
    * ENS domain:      admin.dnp.dappnode.eth
    * Registry domain:       dnp.dappnode.eth
   * @param ensName - The ENS domain name, e.g., "admin.dnp.dappnode.eth".
   * @param registryAbi - The ABI of the registry contract in JSON format.
   * @returns A contract instance of the registry for the specified ENS domain, or null if the registry address is not resolved.
   */
  public async getRegistryContract(ensName: string, registryAbi: string): Promise<ethers.Contract | null> {
    const repoId = ensName.split(".").slice(1).join(".");
    const registryAddress = await this.ethProvider.resolveName(repoId);
    if (!registryAddress) return null;
    return new ethers.Contract(registryAddress, registryAbi, this.ethProvider);
  }

  /**
   * Converts a semantic version string into the APM version array format.
   * @param version - The semantic version string.
   * @returns - The APM version array.
   */
  private toApmVersionArray(version: string): [number, number, number] {
    const semverObj = parse(version);
    if (!semverObj) throw Error(`Invalid semver ${version}`);
    return [semverObj.major, semverObj.minor, semverObj.patch];
  }

  /**
   * Parses the raw version response from an APM repo.
   * @param res - The raw version response from the APM repo.
   * @returns - The parsed APM version.
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
      contentUri: ethers.toUtf8String(res.contentURI),
    };
  }

  /**
   * Ensures the DNP name ends under valid registries: dnp.dappnode.eth or public.dappnode.eth
   * @param dnpName - The name of the DNP.
   * @returns - The valid DNP name.
   */
  private ensureValidDnpName(dnpName: string): string {
    if (!dnpName.endsWith(".dappnode.eth"))
      throw Error(`Invalid dnpName ${dnpName}`);
    return dnpName;
  }
}
