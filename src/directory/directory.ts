import { ethers } from "ethers";
import {
  DAppNodePackageDirectory,
  DAppNodePackageDirectory__factory,
} from "../typechain/index.js";
import { DirectoryDnp, DirectoryItem, directoryDnpStatus } from "./types.js";
import { address } from "./params.js";

export class DappNodeDirectory {
  directoryContract: DAppNodePackageDirectory;

  constructor(ethProvider: ethers.providers.Provider) {
    this.directoryContract = DAppNodePackageDirectory__factory.connect(
      address,
      ethProvider
    );
  }

  public async getDirectoryPkgs(): Promise<DirectoryDnp[]> {
    const numberOfDappnodePackages = (
      await this.directoryContract.numberOfDAppNodePackages()
    ).toNumber();

    // Get featured packages list
    // 0x0b00000000000000000000000000000000000000000000000000000000000000
    const featuredBytes = await this.directoryContract.featured();
    // ["0b", "00", ...]
    /**
     * 1. Strip hex prefix
     * 2. Split by substrings of 2 characters
     * 3. Remove 0 indexes
     * 4. Remove duplicate indexes
     * 5. Base64 to decimal index
     */
    const featuredIndexes: number[] = (
      featuredBytes.replace("0x", "").match(/.{1,2}/g) ?? []
    )
      .filter((value: string) => value !== "00")
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      )
      .map((base64: string) => parseInt(base64, 16));

    const directoryPkgs = await Promise.all(
      Array.from({ length: numberOfDappnodePackages }, (_, i) => i).map(
        async (i) => {
          try {
            const {
              name,
              status: statusBn,
              position: positionBn,
            } = await this.directoryContract.getPackage(i);
            const status = statusBn.toNumber();
            const position = positionBn.toNumber();

            // Make sure the DNP is not Deprecated or Deleted
            if (!this.isEnsDomain(name) || status === 0) return;

            const featuredIndex = featuredIndexes.indexOf(i);
            return {
              name,
              statusName: directoryDnpStatus[status],
              position,
              isFeatured: featuredIndex > -1,
              featuredIndex: featuredIndex,
            };
          } catch (e: any) {
            e.message = `Error retrieving DNP #${i} from directory ${e}`;
            console.log(e);
            return;
          }
        }
      )
    );

    return this.sortDirectoryPkgs(
      directoryPkgs.filter(
        (dnp) => typeof dnp !== "undefined"
      ) as DirectoryDnp[]
    );
  }

  // public async getDirectoryPkgsReleases(): Promise<DirectoryItem[]> {}

  /**
   * UTILS
   */

  /**
   * Sorts a directory with the following order
   * - featured #0
   * - featured #1
   * - normal #0
   * - normal #1
   * - normal #2
   */
  private sortDirectoryPkgs(dnps: DirectoryDnp[]): DirectoryDnp[] {
    const featured = dnps.filter((dnp) => dnp.isFeatured);
    const notFeatured = dnps.filter((dnp) => !dnp.isFeatured);
    return [
      ...featured.sort((a, b) => a.featuredIndex - b.featuredIndex),
      ...notFeatured.sort((a, b) => b.position - a.position),
    ];
  }

  private isEnsDomain(ensDomain: string): boolean {
    const supportedDomains = ["eth"];

    if (!ensDomain || typeof ensDomain !== "string") return false;
    if (ensDomain.includes("/")) return false;
    if (!ensDomain.includes(".")) return false;
    // "kovan.dnp.dappnode.eth" => "eth"
    const domain = ensDomain.split(".").slice(-1)[0] || "";
    if (!supportedDomains.includes(domain)) return false;
    // If any negative condition was matched:
    return true;
  }
}
