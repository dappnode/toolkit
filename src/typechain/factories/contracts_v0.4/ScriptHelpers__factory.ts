/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ScriptHelpers,
  ScriptHelpersInterface,
} from "../../contracts_v0.4/ScriptHelpers";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_a",
        type: "bytes",
      },
      {
        name: "_b",
        type: "bytes",
      },
      {
        name: "_c",
        type: "address[]",
      },
    ],
    name: "abiEncode",
    outputs: [
      {
        name: "d",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_dest",
        type: "uint256",
      },
      {
        name: "_src",
        type: "uint256",
      },
      {
        name: "_len",
        type: "uint256",
      },
    ],
    name: "memcpy",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6060604052341561000f57600080fd5b6103718061001e6000396000f30060606040526004361061004b5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166311fe773d8114610050578063137d702614610063575b600080fd5b6100616004356024356044356101a2565b005b61012b60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528181529291906020840183838082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506101ec95505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561016757808201518382015260200161014f565b50505050905090810190601f1680156101945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b81838260005b602082106101ca578351835260209384019390920191601f19909101906101a8565b6001826020036101000a03905080198451168184511617909252505050505050565b6101f4610333565b6101ff848484610207565b949350505050565b61020f610333565b60606000808061021e886102c9565b6020028401925061022e876102c9565b6020028301915061023e86610304565b60200282019050806040518059106102535750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610291856102898a610311565b868b51610314565b6102a68561029e89610311565b858a51610314565b6102be856102b388610311565b848951602002610314565b505050509392505050565b600080602083518115156102d957fe5b06116102e65760006102e9565b60015b60ff16602083518115156102f957fe5b040160010192915050565b6000815160010192915050565b90565b6000826020860101905061032c8185846020016101a2565b5050505050565b602060405190810160405260008152905600a165627a7a7230582048fd5a3357c37de7dfd2fcdbfa510b7733b182c360b4abd7d2f2318c9c46306e0029";

type ScriptHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ScriptHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ScriptHelpers__factory extends ContractFactory {
  constructor(...args: ScriptHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ScriptHelpers> {
    return super.deploy(overrides || {}) as Promise<ScriptHelpers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ScriptHelpers {
    return super.attach(address) as ScriptHelpers;
  }
  override connect(signer: Signer): ScriptHelpers__factory {
    return super.connect(signer) as ScriptHelpers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ScriptHelpersInterface {
    return new utils.Interface(_abi) as ScriptHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ScriptHelpers {
    return new Contract(address, _abi, signerOrProvider) as ScriptHelpers;
  }
}
