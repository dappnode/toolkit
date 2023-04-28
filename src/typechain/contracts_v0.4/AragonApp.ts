/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AragonAppInterface extends utils.Interface {
  functions: {
    "EVMSCRIPT_REGISTRY_APP_ID()": FunctionFragment;
    "appId()": FunctionFragment;
    "getInitializationBlock()": FunctionFragment;
    "EVMSCRIPT_REGISTRY_APP()": FunctionFragment;
    "kernel()": FunctionFragment;
    "getExecutor(bytes)": FunctionFragment;
    "canPerform(address,bytes32,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EVMSCRIPT_REGISTRY_APP_ID"
      | "appId"
      | "getInitializationBlock"
      | "EVMSCRIPT_REGISTRY_APP"
      | "kernel"
      | "getExecutor"
      | "canPerform"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EVMSCRIPT_REGISTRY_APP_ID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "appId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getInitializationBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EVMSCRIPT_REGISTRY_APP",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getExecutor",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "canPerform",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "EVMSCRIPT_REGISTRY_APP_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInitializationBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EVMSCRIPT_REGISTRY_APP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;

  events: {};
}

export interface AragonApp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AragonAppInterface;

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
    EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<[string]>;

    appId(overrides?: CallOverrides): Promise<[string]>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<[string]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<string>;

  appId(overrides?: CallOverrides): Promise<string>;

  /**
   * @returns Block number in which the contract was initialized
   */
  getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

  EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<string>;

  kernel(overrides?: CallOverrides): Promise<string>;

  getExecutor(
    _script: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  canPerform(
    _sender: PromiseOrValue<string>,
    _role: PromiseOrValue<BytesLike>,
    params: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<string>;

    appId(overrides?: CallOverrides): Promise<string>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

    EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<string>;

    kernel(overrides?: CallOverrides): Promise<string>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<BigNumber>;

    appId(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

    EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EVMSCRIPT_REGISTRY_APP_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EVMSCRIPT_REGISTRY_APP(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
