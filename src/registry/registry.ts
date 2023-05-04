import { ethers } from "ethers";
import { APMRegistry, APMRegistry__factory } from "../typechain/index.js";
import {
  DNPRegistryEntry,
  PublicRegistryEntry,
  RegistryType,
} from "./types.js";
import { request, gql } from "graphql-request";
import {
  registryDnpAddress,
  dnpRegistryGraphEndpoint,
  registryPublicAddress,
  publicRegistryGraphEndpoint,
} from "./params.js";

// TODO:
// - Clean code
// - Review tests
// - Add utils tests
// - Document functions
// - Consider adding scanning functions for events

export class DappNodeRegistry {
  contractAddress: string;
  registry: RegistryType;
  graphEndpoint: string;
  registryContract: APMRegistry;

  constructor(ethProvider: ethers.providers.Provider, registry: RegistryType) {
    this.registry = registry;
    if (registry === RegistryType.dnp) {
      this.contractAddress = registryDnpAddress;
      this.graphEndpoint = dnpRegistryGraphEndpoint;
    } else {
      this.contractAddress = registryPublicAddress;
      this.graphEndpoint = publicRegistryGraphEndpoint;
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
