import { ethers } from "ethers";
import { APMRegistry, APMRegistry__factory } from "../typechain/index.js";
import {
  DNPRegistryEntry,
  PublicRegistryEntry,
  RegistryType,
} from "./types.js";
import { request, gql } from "graphql-request";
import { dnpAddress, publicAddress } from "./params.js";

export class DappNodeRegistry {
  contractAddress: string;
  registry: RegistryType;
  graphEndpoint: string;
  registryContract: APMRegistry;

  constructor(ethProvider: ethers.providers.Provider, registry: RegistryType) {
    this.registry = registry;
    if (registry === RegistryType.dnp) {
      this.contractAddress = dnpAddress;
      this.graphEndpoint =
        "https://api.studio.thegraph.com/query/45661/dappnode-registry/v0.0.3";
    } else {
      this.contractAddress = publicAddress;
      this.graphEndpoint =
        "https://api.studio.thegraph.com/query/45661/public-registry/v0.1.0";
    }

    this.registryContract = APMRegistry__factory.connect(
      this.contractAddress,
      ethProvider
    );
  }

  /**
   * Returns the packages for a given registry: DNP or Public
   * using graphQL
   */
  public async queryGraphNewRepos<T extends RegistryType>(): Promise<
    T extends RegistryType.dnp ? DNPRegistryEntry : PublicRegistryEntry
  > {
    const query =
      this.registry === RegistryType.dnp
        ? gql`
            query {
              newRepos {
                id
                Registry_id
                name
                repo
              }
            }
          `
        : gql`
            query {
              newRepos {
                id
                RegistryPublic_id
                name
                repo
              }
            }
          `;

    return ((await request(this.graphEndpoint, query)) as any).newRepos;
  }
}
