/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface DAOFactoryInterface extends utils.Interface {
  functions: {
    "baseACL()": FunctionFragment;
    "regFactory()": FunctionFragment;
    "baseKernel()": FunctionFragment;
    "newDAO(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "baseACL" | "regFactory" | "baseKernel" | "newDAO"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "baseACL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "regFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "baseKernel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newDAO",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "baseACL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "regFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseKernel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newDAO", data: BytesLike): Result;

  events: {
    "DeployDAO(address)": EventFragment;
    "DeployEVMScriptRegistry(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployDAO"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployEVMScriptRegistry"): EventFragment;
}

export interface DeployDAOEventObject {
  dao: string;
}
export type DeployDAOEvent = TypedEvent<[string], DeployDAOEventObject>;

export type DeployDAOEventFilter = TypedEventFilter<DeployDAOEvent>;

export interface DeployEVMScriptRegistryEventObject {
  reg: string;
}
export type DeployEVMScriptRegistryEvent = TypedEvent<
  [string],
  DeployEVMScriptRegistryEventObject
>;

export type DeployEVMScriptRegistryEventFilter =
  TypedEventFilter<DeployEVMScriptRegistryEvent>;

export interface DAOFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DAOFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    baseACL(overrides?: CallOverrides): Promise<[string]>;

    regFactory(overrides?: CallOverrides): Promise<[string]>;

    baseKernel(overrides?: CallOverrides): Promise<[string]>;

    /**
     * @param _root Address that will be granted control to setup DAO permissions
     */
    newDAO(
      _root: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  baseACL(overrides?: CallOverrides): Promise<string>;

  regFactory(overrides?: CallOverrides): Promise<string>;

  baseKernel(overrides?: CallOverrides): Promise<string>;

  /**
   * @param _root Address that will be granted control to setup DAO permissions
   */
  newDAO(
    _root: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    baseACL(overrides?: CallOverrides): Promise<string>;

    regFactory(overrides?: CallOverrides): Promise<string>;

    baseKernel(overrides?: CallOverrides): Promise<string>;

    /**
     * @param _root Address that will be granted control to setup DAO permissions
     */
    newDAO(
      _root: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "DeployDAO(address)"(dao?: null): DeployDAOEventFilter;
    DeployDAO(dao?: null): DeployDAOEventFilter;

    "DeployEVMScriptRegistry(address)"(
      reg?: null
    ): DeployEVMScriptRegistryEventFilter;
    DeployEVMScriptRegistry(reg?: null): DeployEVMScriptRegistryEventFilter;
  };

  estimateGas: {
    baseACL(overrides?: CallOverrides): Promise<BigNumber>;

    regFactory(overrides?: CallOverrides): Promise<BigNumber>;

    baseKernel(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * @param _root Address that will be granted control to setup DAO permissions
     */
    newDAO(
      _root: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    regFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseKernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * @param _root Address that will be granted control to setup DAO permissions
     */
    newDAO(
      _root: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
