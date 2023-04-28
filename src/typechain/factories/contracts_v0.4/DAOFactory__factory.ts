/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DAOFactory,
  DAOFactoryInterface,
} from "../../contracts_v0.4/DAOFactory";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "baseACL",
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
  {
    constant: true,
    inputs: [],
    name: "regFactory",
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
  {
    constant: true,
    inputs: [],
    name: "baseKernel",
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
  {
    inputs: [
      {
        name: "_baseKernel",
        type: "address",
      },
      {
        name: "_baseACL",
        type: "address",
      },
      {
        name: "_regFactory",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "dao",
        type: "address",
      },
    ],
    name: "DeployDAO",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "reg",
        type: "address",
      },
    ],
    name: "DeployEVMScriptRegistry",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_root",
        type: "address",
      },
    ],
    name: "newDAO",
    outputs: [
      {
        name: "dao",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6060604052341561000f57600080fd5b604051606080610d79833981016040528080519190602001805191906020018051915050600160a060020a0381161561005e5760028054600160a060020a031916600160a060020a0383161790555b5060008054600160a060020a03938416600160a060020a03199182161790915560018054929093169116179055610cdf8061009a6000396000f3006060604052600436106100485763ffffffff60e060020a600035041663086b339e811461004d578063216874441461007c578063656362b51461009b578063b16dd130146100ae575b600080fd5b341561005857600080fd5b6100606100c1565b604051600160a060020a03909116815260200160405180910390f35b341561008757600080fd5b610060600160a060020a03600435166100d0565b34156100a657600080fd5b6100606106bc565b34156100b957600080fd5b6100606106cb565b600154600160a060020a031681565b6000805481908190819081908190600160a060020a03166100ef6106da565b600160a060020a039091168152602001604051809103906000f080151561011557600080fd5b600254909650600160a060020a031615156101305786610132565b305b600154909550600160a060020a038088169163485cc95591168760405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401600060405180830381600087803b151561019157600080fd5b6102c65a03f115156101a257600080fd5b50505085600160a060020a031663de2873596000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156101eb57600080fd5b6102c65a03f115156101fc57600080fd5b5050506040518051600254909550600160a060020a03161590506106755783600160a060020a0316633d6ab68f6000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561026057600080fd5b6102c65a03f1151561027157600080fd5b5050506040518051935050600160a060020a038616638ea8dc9d6000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102c257600080fd5b6102c65a03f115156102d357600080fd5b5050506040518051600254909350600160a060020a038087169250630a8ed3db9116868660405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401600060405180830381600087803b151561034657600080fd5b6102c65a03f1151561035757600080fd5b5050600254600160a060020a03808716925063be038478911688853060405160e060020a63ffffffff8716028152600160a060020a039485166004820152928416602484015260448301919091529091166064820152608401600060405180830381600087803b15156103c957600080fd5b6102c65a03f115156103da57600080fd5b5050600254600160a060020a0316905063869abc24878960006040516020015260405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401602060405180830381600087803b151561043f57600080fd5b6102c65a03f1151561045057600080fd5b5050506040518051905090507f1a40224412580c1ae5a2fbe8029a565f49a3a029608a8fd9320b32477f31457981604051600160a060020a03909116815260200160405180910390a1600254600160a060020a0380861691639d0effdb9116888560405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401600060405180830381600087803b151561050057600080fd5b6102c65a03f1151561051157600080fd5b50505083600160a060020a0316630a8ed3db88868660405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401600060405180830381600087803b151561057557600080fd5b6102c65a03f1151561058657600080fd5b50505083600160a060020a031663afd925df6000888560405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401600060405180830381600087803b15156105eb57600080fd5b6102c65a03f115156105fc57600080fd5b50505083600160a060020a031663afd925df88868660405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401600060405180830381600087803b151561066057600080fd5b6102c65a03f1151561067157600080fd5b5050505b7f3a7eb042a769adf51e9be78b68ed7af0ad7b379246536efc376ed2ca0123828286604051600160a060020a03909116815260200160405180910390a15050505050919050565b600254600160a060020a031681565b600054600160a060020a031681565b6040516105c9806106eb8339019056006060604052341561000f57600080fd5b6040516020806105c98339810160405280805191508190506000806040517f636f726500000000000000000000000000000000000000000000000000000000815260040160405180910390206040517f6b65726e656c2e617261676f6e706d2e6574680000000000000000000000000081526013016040518091039020604051918252602082015260409081019051908190039020815260208101919091526040016000208054600160a060020a0392909216600160a060020a0319909216919091179055506104e5806100e46000396000f30060606040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631113ed0d811461017b578063178e6079146101a057806325012699146101b357806338bb6def146101c6578063756f604914610205578063a3b4b07f14610218578063cbcc65eb1461022b578063db8a61d41461023e575b6101796000806040517f636f726500000000000000000000000000000000000000000000000000000000815260040160405180910390206040517f6b65726e656c2e617261676f6e706d2e657468000000000000000000000000008152601301604051809103902060405191825260208201526040908101905180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610251945050505050565b005b341561018657600080fd5b61018e61028d565b60405190815260200160405180910390f35b34156101ab57600080fd5b61018e6102c1565b34156101be57600080fd5b61018e6102f5565b34156101d157600080fd5b6101dc600435610371565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561021057600080fd5b61018e610399565b341561022357600080fd5b61018e6103cd565b341561023657600080fd5b61018e610449565b341561024957600080fd5b61018e61047d565b61025a826104b1565b151561026557600080fd5b600080825160208401856127105a03f43d604051816000823e828015610289578282f35b8282fd5b6040517f6b65726e656c2e617261676f6e706d2e657468000000000000000000000000008152601301604051809103902081565b6040517f61707000000000000000000000000000000000000000000000000000000000008152600301604051809103902081565b6040517f636f726500000000000000000000000000000000000000000000000000000000815260040160405180910390206040517f6b65726e656c2e617261676f6e706d2e6574680000000000000000000000000081526013016040518091039020604051918252602082015260409081019051809103902081565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6040517f636f7265000000000000000000000000000000000000000000000000000000008152600401604051809103902081565b6040517f6170700000000000000000000000000000000000000000000000000000000000815260030160405180910390206040517f61636c2e617261676f6e706d2e6574680000000000000000000000000000000081526010016040518091039020604051918252602082015260409081019051809103902081565b6040517f61636c2e617261676f6e706d2e657468000000000000000000000000000000008152601001604051809103902081565b6040517f62617365000000000000000000000000000000000000000000000000000000008152600401604051809103902081565b6000903b11905600a165627a7a72305820c59f59dd1b37f4e5f13ab76119c01d8a40c6951c70ec10439340e8fd4c6bdaff0029a165627a7a72305820ec1ea6adc6a88e16737eb8f2d6f37112d0558697ac473309b628223cc54950590029";

type DAOFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAOFactory__factory extends ContractFactory {
  constructor(...args: DAOFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _baseKernel: PromiseOrValue<string>,
    _baseACL: PromiseOrValue<string>,
    _regFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DAOFactory> {
    return super.deploy(
      _baseKernel,
      _baseACL,
      _regFactory,
      overrides || {}
    ) as Promise<DAOFactory>;
  }
  override getDeployTransaction(
    _baseKernel: PromiseOrValue<string>,
    _baseACL: PromiseOrValue<string>,
    _regFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _baseKernel,
      _baseACL,
      _regFactory,
      overrides || {}
    );
  }
  override attach(address: string): DAOFactory {
    return super.attach(address) as DAOFactory;
  }
  override connect(signer: Signer): DAOFactory__factory {
    return super.connect(signer) as DAOFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOFactoryInterface {
    return new utils.Interface(_abi) as DAOFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DAOFactory {
    return new Contract(address, _abi, signerOrProvider) as DAOFactory;
  }
}
