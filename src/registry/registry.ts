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

// TODO: Consider adding scanning functions for events

/**
 * DappNodeRegistry is a class to interact with the DAppNode Registry Contract.
 */
export class DappNodeRegistry {
  private contractAddress: string;
  private registry: RegistryType;
  private graphEndpoint: string;
  private registryContract: APMRegistry;

  /**
   * Class constructor
   * @param ethProvider - The ethers provider to interact with the Ethereum network.
   * @param registry - The type of the registry (DNP or Public).
   */
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
   * Fetches the packages for the given registry using graphQL.
   * @returns - A promise that resolves to an array of registry entries.
   */
  public async queryGraphNewRepos<T extends RegistryType>(): Promise<
    T extends RegistryType.dnp ? DNPRegistryEntry : PublicRegistryEntry
  > {
    const query = this.constructGraphQLQuery();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((await request(this.graphEndpoint, query)) as any).newRepos;
  }

  /**
   * Constructs the GraphQL query based on the type of the registry.
   * @returns - The GraphQL query string.
   */
  private constructGraphQLQuery(): string {
    return this.registry === RegistryType.dnp
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
  }
}
