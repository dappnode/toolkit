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

export interface ENSFactoryInterface extends utils.Interface {
  functions: {
    "PUBLIC_RESOLVER_NODE()": FunctionFragment;
    "ETH_TLD_LABEL()": FunctionFragment;
    "ENS_ROOT()": FunctionFragment;
    "PUBLIC_RESOLVER_LABEL()": FunctionFragment;
    "ETH_TLD_NODE()": FunctionFragment;
    "newENS(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PUBLIC_RESOLVER_NODE"
      | "ETH_TLD_LABEL"
      | "ENS_ROOT"
      | "PUBLIC_RESOLVER_LABEL"
      | "ETH_TLD_NODE"
      | "newENS"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PUBLIC_RESOLVER_NODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ETH_TLD_LABEL",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ENS_ROOT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PUBLIC_RESOLVER_LABEL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ETH_TLD_NODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newENS",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "PUBLIC_RESOLVER_NODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ETH_TLD_LABEL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ENS_ROOT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PUBLIC_RESOLVER_LABEL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ETH_TLD_NODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newENS", data: BytesLike): Result;

  events: {
    "DeployENS(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployENS"): EventFragment;
}

export interface DeployENSEventObject {
  ens: string;
}
export type DeployENSEvent = TypedEvent<[string], DeployENSEventObject>;

export type DeployENSEventFilter = TypedEventFilter<DeployENSEvent>;

export interface ENSFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ENSFactoryInterface;

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
    PUBLIC_RESOLVER_NODE(overrides?: CallOverrides): Promise<[string]>;

    ETH_TLD_LABEL(overrides?: CallOverrides): Promise<[string]>;

    ENS_ROOT(overrides?: CallOverrides): Promise<[string]>;

    PUBLIC_RESOLVER_LABEL(overrides?: CallOverrides): Promise<[string]>;

    ETH_TLD_NODE(overrides?: CallOverrides): Promise<[string]>;

    newENS(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  PUBLIC_RESOLVER_NODE(overrides?: CallOverrides): Promise<string>;

  ETH_TLD_LABEL(overrides?: CallOverrides): Promise<string>;

  ENS_ROOT(overrides?: CallOverrides): Promise<string>;

  PUBLIC_RESOLVER_LABEL(overrides?: CallOverrides): Promise<string>;

  ETH_TLD_NODE(overrides?: CallOverrides): Promise<string>;

  newENS(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PUBLIC_RESOLVER_NODE(overrides?: CallOverrides): Promise<string>;

    ETH_TLD_LABEL(overrides?: CallOverrides): Promise<string>;

    ENS_ROOT(overrides?: CallOverrides): Promise<string>;

    PUBLIC_RESOLVER_LABEL(overrides?: CallOverrides): Promise<string>;

    ETH_TLD_NODE(overrides?: CallOverrides): Promise<string>;

    newENS(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "DeployENS(address)"(ens?: null): DeployENSEventFilter;
    DeployENS(ens?: null): DeployENSEventFilter;
  };

  estimateGas: {
    PUBLIC_RESOLVER_NODE(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_TLD_LABEL(overrides?: CallOverrides): Promise<BigNumber>;

    ENS_ROOT(overrides?: CallOverrides): Promise<BigNumber>;

    PUBLIC_RESOLVER_LABEL(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_TLD_NODE(overrides?: CallOverrides): Promise<BigNumber>;

    newENS(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PUBLIC_RESOLVER_NODE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ETH_TLD_LABEL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ENS_ROOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PUBLIC_RESOLVER_LABEL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ETH_TLD_NODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newENS(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
