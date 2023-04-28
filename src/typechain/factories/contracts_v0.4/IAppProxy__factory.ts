/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAppProxy,
  IAppProxyInterface,
} from "../../contracts_v0.4/IAppProxy";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "isUpgradeable",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCode",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAppProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IAppProxyInterface {
    return new utils.Interface(_abi) as IAppProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAppProxy {
    return new Contract(address, _abi, signerOrProvider) as IAppProxy;
  }
}
