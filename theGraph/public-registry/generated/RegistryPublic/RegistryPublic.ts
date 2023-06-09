// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewRepo extends ethereum.Event {
  get params(): NewRepo__Params {
    return new NewRepo__Params(this);
  }
}

export class NewRepo__Params {
  _event: NewRepo;

  constructor(event: NewRepo) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get repo(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewAppProxy extends ethereum.Event {
  get params(): NewAppProxy__Params {
    return new NewAppProxy__Params(this);
  }
}

export class NewAppProxy__Params {
  _event: NewAppProxy;

  constructor(event: NewAppProxy) {
    this._event = event;
  }

  get proxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RegistryPublic extends ethereum.SmartContract {
  static bind(address: Address): RegistryPublic {
    return new RegistryPublic("RegistryPublic", address);
  }

  REPO_APP_NAME(): string {
    let result = super.call("REPO_APP_NAME", "REPO_APP_NAME():(string)", []);

    return result[0].toString();
  }

  try_REPO_APP_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("REPO_APP_NAME", "REPO_APP_NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  APM_APP_NAME(): string {
    let result = super.call("APM_APP_NAME", "APM_APP_NAME():(string)", []);

    return result[0].toString();
  }

  try_APM_APP_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("APM_APP_NAME", "APM_APP_NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ENS_SUB_APP_NAME(): string {
    let result = super.call(
      "ENS_SUB_APP_NAME",
      "ENS_SUB_APP_NAME():(string)",
      []
    );

    return result[0].toString();
  }

  try_ENS_SUB_APP_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "ENS_SUB_APP_NAME",
      "ENS_SUB_APP_NAME():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  registrar(): Address {
    let result = super.call("registrar", "registrar():(address)", []);

    return result[0].toAddress();
  }

  try_registrar(): ethereum.CallResult<Address> {
    let result = super.tryCall("registrar", "registrar():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newRepoWithVersion(
    _name: string,
    _dev: Address,
    _initialSemanticVersion: Array<i32>,
    _contractAddress: Address,
    _contentURI: Bytes
  ): Address {
    let result = super.call(
      "newRepoWithVersion",
      "newRepoWithVersion(string,address,uint16[3],address,bytes):(address)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromAddress(_dev),
        ethereum.Value.fromI32Array(_initialSemanticVersion),
        ethereum.Value.fromAddress(_contractAddress),
        ethereum.Value.fromBytes(_contentURI)
      ]
    );

    return result[0].toAddress();
  }

  try_newRepoWithVersion(
    _name: string,
    _dev: Address,
    _initialSemanticVersion: Array<i32>,
    _contractAddress: Address,
    _contentURI: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newRepoWithVersion",
      "newRepoWithVersion(string,address,uint16[3],address,bytes):(address)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromAddress(_dev),
        ethereum.Value.fromI32Array(_initialSemanticVersion),
        ethereum.Value.fromAddress(_contractAddress),
        ethereum.Value.fromBytes(_contentURI)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  CREATE_REPO_ROLE(): Bytes {
    let result = super.call(
      "CREATE_REPO_ROLE",
      "CREATE_REPO_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CREATE_REPO_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CREATE_REPO_ROLE",
      "CREATE_REPO_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  EVMSCRIPT_REGISTRY_APP_ID(): Bytes {
    let result = super.call(
      "EVMSCRIPT_REGISTRY_APP_ID",
      "EVMSCRIPT_REGISTRY_APP_ID():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EVMSCRIPT_REGISTRY_APP_ID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EVMSCRIPT_REGISTRY_APP_ID",
      "EVMSCRIPT_REGISTRY_APP_ID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  appId(): Bytes {
    let result = super.call("appId", "appId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_appId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("appId", "appId():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getInitializationBlock(): BigInt {
    let result = super.call(
      "getInitializationBlock",
      "getInitializationBlock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getInitializationBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getInitializationBlock",
      "getInitializationBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  EVMSCRIPT_REGISTRY_APP(): Bytes {
    let result = super.call(
      "EVMSCRIPT_REGISTRY_APP",
      "EVMSCRIPT_REGISTRY_APP():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EVMSCRIPT_REGISTRY_APP(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EVMSCRIPT_REGISTRY_APP",
      "EVMSCRIPT_REGISTRY_APP():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  canPerform(_sender: Address, _role: Bytes, params: Array<BigInt>): boolean {
    let result = super.call(
      "canPerform",
      "canPerform(address,bytes32,uint256[]):(bool)",
      [
        ethereum.Value.fromAddress(_sender),
        ethereum.Value.fromFixedBytes(_role),
        ethereum.Value.fromUnsignedBigIntArray(params)
      ]
    );

    return result[0].toBoolean();
  }

  try_canPerform(
    _sender: Address,
    _role: Bytes,
    params: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canPerform",
      "canPerform(address,bytes32,uint256[]):(bool)",
      [
        ethereum.Value.fromAddress(_sender),
        ethereum.Value.fromFixedBytes(_role),
        ethereum.Value.fromUnsignedBigIntArray(params)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  newRepo(_name: string, _dev: Address): Address {
    let result = super.call("newRepo", "newRepo(string,address):(address)", [
      ethereum.Value.fromString(_name),
      ethereum.Value.fromAddress(_dev)
    ]);

    return result[0].toAddress();
  }

  try_newRepo(_name: string, _dev: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("newRepo", "newRepo(string,address):(address)", [
      ethereum.Value.fromString(_name),
      ethereum.Value.fromAddress(_dev)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newAppProxyPinned(
    _kernel: Address,
    _appId: Bytes,
    _initializePayload: Bytes
  ): Address {
    let result = super.call(
      "newAppProxyPinned",
      "newAppProxyPinned(address,bytes32,bytes):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId),
        ethereum.Value.fromBytes(_initializePayload)
      ]
    );

    return result[0].toAddress();
  }

  try_newAppProxyPinned(
    _kernel: Address,
    _appId: Bytes,
    _initializePayload: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newAppProxyPinned",
      "newAppProxyPinned(address,bytes32,bytes):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId),
        ethereum.Value.fromBytes(_initializePayload)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  kernel(): Address {
    let result = super.call("kernel", "kernel():(address)", []);

    return result[0].toAddress();
  }

  try_kernel(): ethereum.CallResult<Address> {
    let result = super.tryCall("kernel", "kernel():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newAppProxy(_kernel: Address, _appId: Bytes): Address {
    let result = super.call(
      "newAppProxy",
      "newAppProxy(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId)
      ]
    );

    return result[0].toAddress();
  }

  try_newAppProxy(
    _kernel: Address,
    _appId: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newAppProxy",
      "newAppProxy(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newAppProxy1(
    _kernel: Address,
    _appId: Bytes,
    _initializePayload: Bytes
  ): Address {
    let result = super.call(
      "newAppProxy",
      "newAppProxy(address,bytes32,bytes):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId),
        ethereum.Value.fromBytes(_initializePayload)
      ]
    );

    return result[0].toAddress();
  }

  try_newAppProxy1(
    _kernel: Address,
    _appId: Bytes,
    _initializePayload: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newAppProxy",
      "newAppProxy(address,bytes32,bytes):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId),
        ethereum.Value.fromBytes(_initializePayload)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getExecutor(_script: Bytes): Address {
    let result = super.call("getExecutor", "getExecutor(bytes):(address)", [
      ethereum.Value.fromBytes(_script)
    ]);

    return result[0].toAddress();
  }

  try_getExecutor(_script: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("getExecutor", "getExecutor(bytes):(address)", [
      ethereum.Value.fromBytes(_script)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newAppProxyPinned1(_kernel: Address, _appId: Bytes): Address {
    let result = super.call(
      "newAppProxyPinned",
      "newAppProxyPinned(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId)
      ]
    );

    return result[0].toAddress();
  }

  try_newAppProxyPinned1(
    _kernel: Address,
    _appId: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newAppProxyPinned",
      "newAppProxyPinned(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_kernel),
        ethereum.Value.fromFixedBytes(_appId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class NewRepoWithVersionCall extends ethereum.Call {
  get inputs(): NewRepoWithVersionCall__Inputs {
    return new NewRepoWithVersionCall__Inputs(this);
  }

  get outputs(): NewRepoWithVersionCall__Outputs {
    return new NewRepoWithVersionCall__Outputs(this);
  }
}

export class NewRepoWithVersionCall__Inputs {
  _call: NewRepoWithVersionCall;

  constructor(call: NewRepoWithVersionCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _dev(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _initialSemanticVersion(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }

  get _contractAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _contentURI(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class NewRepoWithVersionCall__Outputs {
  _call: NewRepoWithVersionCall;

  constructor(call: NewRepoWithVersionCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class NewRepoCall extends ethereum.Call {
  get inputs(): NewRepoCall__Inputs {
    return new NewRepoCall__Inputs(this);
  }

  get outputs(): NewRepoCall__Outputs {
    return new NewRepoCall__Outputs(this);
  }
}

export class NewRepoCall__Inputs {
  _call: NewRepoCall;

  constructor(call: NewRepoCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _dev(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class NewRepoCall__Outputs {
  _call: NewRepoCall;

  constructor(call: NewRepoCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _registrar(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class NewAppProxyPinnedCall extends ethereum.Call {
  get inputs(): NewAppProxyPinnedCall__Inputs {
    return new NewAppProxyPinnedCall__Inputs(this);
  }

  get outputs(): NewAppProxyPinnedCall__Outputs {
    return new NewAppProxyPinnedCall__Outputs(this);
  }
}

export class NewAppProxyPinnedCall__Inputs {
  _call: NewAppProxyPinnedCall;

  constructor(call: NewAppProxyPinnedCall) {
    this._call = call;
  }

  get _kernel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _appId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _initializePayload(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class NewAppProxyPinnedCall__Outputs {
  _call: NewAppProxyPinnedCall;

  constructor(call: NewAppProxyPinnedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class NewAppProxyCall extends ethereum.Call {
  get inputs(): NewAppProxyCall__Inputs {
    return new NewAppProxyCall__Inputs(this);
  }

  get outputs(): NewAppProxyCall__Outputs {
    return new NewAppProxyCall__Outputs(this);
  }
}

export class NewAppProxyCall__Inputs {
  _call: NewAppProxyCall;

  constructor(call: NewAppProxyCall) {
    this._call = call;
  }

  get _kernel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _appId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class NewAppProxyCall__Outputs {
  _call: NewAppProxyCall;

  constructor(call: NewAppProxyCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class NewAppProxy1Call extends ethereum.Call {
  get inputs(): NewAppProxy1Call__Inputs {
    return new NewAppProxy1Call__Inputs(this);
  }

  get outputs(): NewAppProxy1Call__Outputs {
    return new NewAppProxy1Call__Outputs(this);
  }
}

export class NewAppProxy1Call__Inputs {
  _call: NewAppProxy1Call;

  constructor(call: NewAppProxy1Call) {
    this._call = call;
  }

  get _kernel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _appId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _initializePayload(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class NewAppProxy1Call__Outputs {
  _call: NewAppProxy1Call;

  constructor(call: NewAppProxy1Call) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class NewAppProxyPinned1Call extends ethereum.Call {
  get inputs(): NewAppProxyPinned1Call__Inputs {
    return new NewAppProxyPinned1Call__Inputs(this);
  }

  get outputs(): NewAppProxyPinned1Call__Outputs {
    return new NewAppProxyPinned1Call__Outputs(this);
  }
}

export class NewAppProxyPinned1Call__Inputs {
  _call: NewAppProxyPinned1Call;

  constructor(call: NewAppProxyPinned1Call) {
    this._call = call;
  }

  get _kernel(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _appId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class NewAppProxyPinned1Call__Outputs {
  _call: NewAppProxyPinned1Call;

  constructor(call: NewAppProxyPinned1Call) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
