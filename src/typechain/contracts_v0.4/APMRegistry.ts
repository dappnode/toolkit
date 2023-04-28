/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface APMRegistryInterface extends utils.Interface {
  functions: {
    "REPO_APP_NAME()": FunctionFragment;
    "APM_APP_NAME()": FunctionFragment;
    "ENS_SUB_APP_NAME()": FunctionFragment;
    "registrar()": FunctionFragment;
    "CREATE_REPO_ROLE()": FunctionFragment;
    "EVMSCRIPT_REGISTRY_APP_ID()": FunctionFragment;
    "appId()": FunctionFragment;
    "getInitializationBlock()": FunctionFragment;
    "EVMSCRIPT_REGISTRY_APP()": FunctionFragment;
    "canPerform(address,bytes32,uint256[])": FunctionFragment;
    "newAppProxyPinned(address,bytes32,bytes)": FunctionFragment;
    "newAppProxyPinned(address,bytes32)": FunctionFragment;
    "kernel()": FunctionFragment;
    "newAppProxy(address,bytes32)": FunctionFragment;
    "newAppProxy(address,bytes32,bytes)": FunctionFragment;
    "getExecutor(bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "newRepo(string,address)": FunctionFragment;
    "newRepoWithVersion(string,address,uint16[3],address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "REPO_APP_NAME"
      | "APM_APP_NAME"
      | "ENS_SUB_APP_NAME"
      | "registrar"
      | "CREATE_REPO_ROLE"
      | "EVMSCRIPT_REGISTRY_APP_ID"
      | "appId"
      | "getInitializationBlock"
      | "EVMSCRIPT_REGISTRY_APP"
      | "canPerform"
      | "newAppProxyPinned(address,bytes32,bytes)"
      | "newAppProxyPinned(address,bytes32)"
      | "kernel"
      | "newAppProxy(address,bytes32)"
      | "newAppProxy(address,bytes32,bytes)"
      | "getExecutor"
      | "initialize"
      | "newRepo"
      | "newRepoWithVersion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "REPO_APP_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "APM_APP_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ENS_SUB_APP_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CREATE_REPO_ROLE",
    values?: undefined
  ): string;
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
  encodeFunctionData(
    functionFragment: "canPerform",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "newAppProxyPinned(address,bytes32,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "newAppProxyPinned(address,bytes32)",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newAppProxy(address,bytes32)",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "newAppProxy(address,bytes32,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getExecutor",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "newRepo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "newRepoWithVersion",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "REPO_APP_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "APM_APP_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ENS_SUB_APP_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CREATE_REPO_ROLE",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newAppProxyPinned(address,bytes32,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newAppProxyPinned(address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newAppProxy(address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newAppProxy(address,bytes32,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newRepo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newRepoWithVersion",
    data: BytesLike
  ): Result;

  events: {
    "NewRepo(bytes32,string,address)": EventFragment;
    "NewAppProxy(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRepo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAppProxy"): EventFragment;
}

export interface NewRepoEventObject {
  id: string;
  name: string;
  repo: string;
}
export type NewRepoEvent = TypedEvent<
  [string, string, string],
  NewRepoEventObject
>;

export type NewRepoEventFilter = TypedEventFilter<NewRepoEvent>;

export interface NewAppProxyEventObject {
  proxy: string;
}
export type NewAppProxyEvent = TypedEvent<[string], NewAppProxyEventObject>;

export type NewAppProxyEventFilter = TypedEventFilter<NewAppProxyEvent>;

export interface APMRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: APMRegistryInterface;

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
    REPO_APP_NAME(overrides?: CallOverrides): Promise<[string]>;

    APM_APP_NAME(overrides?: CallOverrides): Promise<[string]>;

    ENS_SUB_APP_NAME(overrides?: CallOverrides): Promise<[string]>;

    registrar(overrides?: CallOverrides): Promise<[string]>;

    CREATE_REPO_ROLE(overrides?: CallOverrides): Promise<[string]>;

    EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<[string]>;

    appId(overrides?: CallOverrides): Promise<[string]>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<[string]>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "newAppProxyPinned(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "newAppProxyPinned(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    "newAppProxy(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "newAppProxy(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * NEEDS CREATE_NAME_ROLE and POINT_ROOTNODE_ROLE permissions on registrar
     * @param _registrar ENSSubdomainRegistrar instance that holds registry root node ownership
     */
    initialize(
      _registrar: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Create new repo in registry with `_name`
     * @param _dev Address that will be given permission to create versions
     * @param _name Repo name, must be ununsed
     */
    newRepo(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Create new repo in registry with `_name` and first repo version
     * @param _contentURI External URI for fetching new version's content
     * @param _contractAddress address for smart contract logic for version (if set to 0, it uses last versions' contractAddress)
     * @param _dev Address that will be given permission to create versions
     * @param _initialSemanticVersion Semantic version for new repo version
     * @param _name Repo name
     */
    newRepoWithVersion(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      _initialSemanticVersion: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      _contractAddress: PromiseOrValue<string>,
      _contentURI: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  REPO_APP_NAME(overrides?: CallOverrides): Promise<string>;

  APM_APP_NAME(overrides?: CallOverrides): Promise<string>;

  ENS_SUB_APP_NAME(overrides?: CallOverrides): Promise<string>;

  registrar(overrides?: CallOverrides): Promise<string>;

  CREATE_REPO_ROLE(overrides?: CallOverrides): Promise<string>;

  EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<string>;

  appId(overrides?: CallOverrides): Promise<string>;

  /**
   * @returns Block number in which the contract was initialized
   */
  getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

  EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<string>;

  canPerform(
    _sender: PromiseOrValue<string>,
    _role: PromiseOrValue<BytesLike>,
    params: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "newAppProxyPinned(address,bytes32,bytes)"(
    _kernel: PromiseOrValue<string>,
    _appId: PromiseOrValue<BytesLike>,
    _initializePayload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "newAppProxyPinned(address,bytes32)"(
    _kernel: PromiseOrValue<string>,
    _appId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  kernel(overrides?: CallOverrides): Promise<string>;

  "newAppProxy(address,bytes32)"(
    _kernel: PromiseOrValue<string>,
    _appId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "newAppProxy(address,bytes32,bytes)"(
    _kernel: PromiseOrValue<string>,
    _appId: PromiseOrValue<BytesLike>,
    _initializePayload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getExecutor(
    _script: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * NEEDS CREATE_NAME_ROLE and POINT_ROOTNODE_ROLE permissions on registrar
   * @param _registrar ENSSubdomainRegistrar instance that holds registry root node ownership
   */
  initialize(
    _registrar: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Create new repo in registry with `_name`
   * @param _dev Address that will be given permission to create versions
   * @param _name Repo name, must be ununsed
   */
  newRepo(
    _name: PromiseOrValue<string>,
    _dev: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Create new repo in registry with `_name` and first repo version
   * @param _contentURI External URI for fetching new version's content
   * @param _contractAddress address for smart contract logic for version (if set to 0, it uses last versions' contractAddress)
   * @param _dev Address that will be given permission to create versions
   * @param _initialSemanticVersion Semantic version for new repo version
   * @param _name Repo name
   */
  newRepoWithVersion(
    _name: PromiseOrValue<string>,
    _dev: PromiseOrValue<string>,
    _initialSemanticVersion: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    _contractAddress: PromiseOrValue<string>,
    _contentURI: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    REPO_APP_NAME(overrides?: CallOverrides): Promise<string>;

    APM_APP_NAME(overrides?: CallOverrides): Promise<string>;

    ENS_SUB_APP_NAME(overrides?: CallOverrides): Promise<string>;

    registrar(overrides?: CallOverrides): Promise<string>;

    CREATE_REPO_ROLE(overrides?: CallOverrides): Promise<string>;

    EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<string>;

    appId(overrides?: CallOverrides): Promise<string>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

    EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<string>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "newAppProxyPinned(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "newAppProxyPinned(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    kernel(overrides?: CallOverrides): Promise<string>;

    "newAppProxy(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "newAppProxy(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * NEEDS CREATE_NAME_ROLE and POINT_ROOTNODE_ROLE permissions on registrar
     * @param _registrar ENSSubdomainRegistrar instance that holds registry root node ownership
     */
    initialize(
      _registrar: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Create new repo in registry with `_name`
     * @param _dev Address that will be given permission to create versions
     * @param _name Repo name, must be ununsed
     */
    newRepo(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Create new repo in registry with `_name` and first repo version
     * @param _contentURI External URI for fetching new version's content
     * @param _contractAddress address for smart contract logic for version (if set to 0, it uses last versions' contractAddress)
     * @param _dev Address that will be given permission to create versions
     * @param _initialSemanticVersion Semantic version for new repo version
     * @param _name Repo name
     */
    newRepoWithVersion(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      _initialSemanticVersion: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      _contractAddress: PromiseOrValue<string>,
      _contentURI: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "NewRepo(bytes32,string,address)"(
      id?: null,
      name?: null,
      repo?: null
    ): NewRepoEventFilter;
    NewRepo(id?: null, name?: null, repo?: null): NewRepoEventFilter;

    "NewAppProxy(address)"(proxy?: null): NewAppProxyEventFilter;
    NewAppProxy(proxy?: null): NewAppProxyEventFilter;
  };

  estimateGas: {
    REPO_APP_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    APM_APP_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    ENS_SUB_APP_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    registrar(overrides?: CallOverrides): Promise<BigNumber>;

    CREATE_REPO_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    EVMSCRIPT_REGISTRY_APP_ID(overrides?: CallOverrides): Promise<BigNumber>;

    appId(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * @returns Block number in which the contract was initialized
     */
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

    EVMSCRIPT_REGISTRY_APP(overrides?: CallOverrides): Promise<BigNumber>;

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "newAppProxyPinned(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "newAppProxyPinned(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    "newAppProxy(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "newAppProxy(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * NEEDS CREATE_NAME_ROLE and POINT_ROOTNODE_ROLE permissions on registrar
     * @param _registrar ENSSubdomainRegistrar instance that holds registry root node ownership
     */
    initialize(
      _registrar: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Create new repo in registry with `_name`
     * @param _dev Address that will be given permission to create versions
     * @param _name Repo name, must be ununsed
     */
    newRepo(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Create new repo in registry with `_name` and first repo version
     * @param _contentURI External URI for fetching new version's content
     * @param _contractAddress address for smart contract logic for version (if set to 0, it uses last versions' contractAddress)
     * @param _dev Address that will be given permission to create versions
     * @param _initialSemanticVersion Semantic version for new repo version
     * @param _name Repo name
     */
    newRepoWithVersion(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      _initialSemanticVersion: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      _contractAddress: PromiseOrValue<string>,
      _contentURI: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REPO_APP_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    APM_APP_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ENS_SUB_APP_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATE_REPO_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    canPerform(
      _sender: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      params: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "newAppProxyPinned(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "newAppProxyPinned(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newAppProxy(address,bytes32)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "newAppProxy(address,bytes32,bytes)"(
      _kernel: PromiseOrValue<string>,
      _appId: PromiseOrValue<BytesLike>,
      _initializePayload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getExecutor(
      _script: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * NEEDS CREATE_NAME_ROLE and POINT_ROOTNODE_ROLE permissions on registrar
     * @param _registrar ENSSubdomainRegistrar instance that holds registry root node ownership
     */
    initialize(
      _registrar: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Create new repo in registry with `_name`
     * @param _dev Address that will be given permission to create versions
     * @param _name Repo name, must be ununsed
     */
    newRepo(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Create new repo in registry with `_name` and first repo version
     * @param _contentURI External URI for fetching new version's content
     * @param _contractAddress address for smart contract logic for version (if set to 0, it uses last versions' contractAddress)
     * @param _dev Address that will be given permission to create versions
     * @param _initialSemanticVersion Semantic version for new repo version
     * @param _name Repo name
     */
    newRepoWithVersion(
      _name: PromiseOrValue<string>,
      _dev: PromiseOrValue<string>,
      _initialSemanticVersion: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      _contractAddress: PromiseOrValue<string>,
      _contentURI: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
