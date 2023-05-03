# DappNode Toolkit

This repository contains a collection of modules and tools for interacting with the Aragon Package Manager (Registry and Repository) and the Dappnode Directory Smart Contract.

## Integrations

### TheGraph

### Truffle

### Typechain

## Modules

- **Registry**: this module deals with the registries available in dappnode: `dnp.dappnode.eth` and `public.dappnode.eth`. Where `dnp` is handled by dappnode organization and `public` is available for everyone who wants to publish their own package. This module uses the Graph among other things to search for the events emitted by each Smart Contract Registry: `NewRepo`. The registry module allows you to fetch all the dappnode packages under each registry, then using the module Repository, it could be fetch all the dappnode packages releases assets.
- **Directory**: this module deals with the Dappnode Directory smart contract used to define the dappnode packages available in the dappstore for either `dnp` and `public` dappnode packages. This smart contract define the whitelist of dappnode packages as well as its position and the featured index.
- **Repository**: this module deals with the repository Smart Contract that each dappnode package ENS resolves to. This module allows to fetch ipfs hashes based on versions provided, as well as resolve these ipfs hashes given an IPFS url. Furthermore, it allows to use either IPFS gateways and APIs, with content trust verification for IPFS gateways (with `dag`).
- **Typechain**: inside this module there are the Smart Contract types created with typechain and the compiled Smart Contracts by truffle. It allows to have types for the smart contracts using the ethers library.

## Test

## Contributing

We welcome contributions to the DappNode Toolkit. Please refer to the CONTRIBUTING.md file for guidelines on how to contribute.

## License

The DappNode Toolkit is released under the MIT License. Please refer to the LICENSE file for more information.
