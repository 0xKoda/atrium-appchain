/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "username.loan.loan";

export interface MsgRequest {
  creator: string;
  loan: string;
}

export interface MsgRequestResponse {}

export interface MsgApprove {
  creator: string;
  loan: string;
}

export interface MsgApproveResponse {}

export interface MsgRepay {
  creator: string;
  loan: string;
}

export interface MsgRepayResponse {}

export interface MsgLiquidate {
  creator: string;
  loan: string;
}

export interface MsgLiquidateResponse {}

export interface MsgCancel {
  creator: string;
  loan: string;
}

export interface MsgCancelResponse {}

export interface MsgRequestLoan {
  creator: string;
  amount: string;
  fee: string;
  collateral: string;
  deadline: string;
}

export interface MsgRequestLoanResponse {}

const baseMsgRequest: object = { creator: "", loan: "" };

export const MsgRequest = {
  encode(message: MsgRequest, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.loan !== "") {
      writer.uint32(18).string(message.loan);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequest } as MsgRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.loan = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequest {
    const message = { ...baseMsgRequest } as MsgRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = String(object.loan);
    } else {
      message.loan = "";
    }
    return message;
  },

  toJSON(message: MsgRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.loan !== undefined && (obj.loan = message.loan);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequest>): MsgRequest {
    const message = { ...baseMsgRequest } as MsgRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = object.loan;
    } else {
      message.loan = "";
    }
    return message;
  },
};

const baseMsgRequestResponse: object = {};

export const MsgRequestResponse = {
  encode(_: MsgRequestResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestResponse } as MsgRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRequestResponse {
    const message = { ...baseMsgRequestResponse } as MsgRequestResponse;
    return message;
  },

  toJSON(_: MsgRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRequestResponse>): MsgRequestResponse {
    const message = { ...baseMsgRequestResponse } as MsgRequestResponse;
    return message;
  },
};

const baseMsgApprove: object = { creator: "", loan: "" };

export const MsgApprove = {
  encode(message: MsgApprove, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.loan !== "") {
      writer.uint32(18).string(message.loan);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApprove } as MsgApprove;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.loan = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApprove {
    const message = { ...baseMsgApprove } as MsgApprove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = String(object.loan);
    } else {
      message.loan = "";
    }
    return message;
  },

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.loan !== undefined && (obj.loan = message.loan);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApprove>): MsgApprove {
    const message = { ...baseMsgApprove } as MsgApprove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = object.loan;
    } else {
      message.loan = "";
    }
    return message;
  },
};

const baseMsgApproveResponse: object = {};

export const MsgApproveResponse = {
  encode(_: MsgApproveResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgApproveResponse {
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    return message;
  },

  toJSON(_: MsgApproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApproveResponse>): MsgApproveResponse {
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    return message;
  },
};

const baseMsgRepay: object = { creator: "", loan: "" };

export const MsgRepay = {
  encode(message: MsgRepay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.loan !== "") {
      writer.uint32(18).string(message.loan);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRepay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepay } as MsgRepay;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.loan = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepay {
    const message = { ...baseMsgRepay } as MsgRepay;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = String(object.loan);
    } else {
      message.loan = "";
    }
    return message;
  },

  toJSON(message: MsgRepay): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.loan !== undefined && (obj.loan = message.loan);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepay>): MsgRepay {
    const message = { ...baseMsgRepay } as MsgRepay;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = object.loan;
    } else {
      message.loan = "";
    }
    return message;
  },
};

const baseMsgRepayResponse: object = {};

export const MsgRepayResponse = {
  encode(_: MsgRepayResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRepayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayResponse } as MsgRepayResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRepayResponse {
    const message = { ...baseMsgRepayResponse } as MsgRepayResponse;
    return message;
  },

  toJSON(_: MsgRepayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse {
    const message = { ...baseMsgRepayResponse } as MsgRepayResponse;
    return message;
  },
};

const baseMsgLiquidate: object = { creator: "", loan: "" };

export const MsgLiquidate = {
  encode(message: MsgLiquidate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.loan !== "") {
      writer.uint32(18).string(message.loan);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLiquidate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidate } as MsgLiquidate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.loan = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidate {
    const message = { ...baseMsgLiquidate } as MsgLiquidate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = String(object.loan);
    } else {
      message.loan = "";
    }
    return message;
  },

  toJSON(message: MsgLiquidate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.loan !== undefined && (obj.loan = message.loan);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLiquidate>): MsgLiquidate {
    const message = { ...baseMsgLiquidate } as MsgLiquidate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = object.loan;
    } else {
      message.loan = "";
    }
    return message;
  },
};

const baseMsgLiquidateResponse: object = {};

export const MsgLiquidateResponse = {
  encode(_: MsgLiquidateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLiquidateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateResponse } as MsgLiquidateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLiquidateResponse {
    const message = { ...baseMsgLiquidateResponse } as MsgLiquidateResponse;
    return message;
  },

  toJSON(_: MsgLiquidateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = { ...baseMsgLiquidateResponse } as MsgLiquidateResponse;
    return message;
  },
};

const baseMsgCancel: object = { creator: "", loan: "" };

export const MsgCancel = {
  encode(message: MsgCancel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.loan !== "") {
      writer.uint32(18).string(message.loan);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancel } as MsgCancel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.loan = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancel {
    const message = { ...baseMsgCancel } as MsgCancel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = String(object.loan);
    } else {
      message.loan = "";
    }
    return message;
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.loan !== undefined && (obj.loan = message.loan);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancel>): MsgCancel {
    const message = { ...baseMsgCancel } as MsgCancel;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.loan !== undefined && object.loan !== null) {
      message.loan = object.loan;
    } else {
      message.loan = "";
    }
    return message;
  },
};

const baseMsgCancelResponse: object = {};

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelResponse {
    const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
    return message;
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
    return message;
  },
};

const baseMsgRequestLoan: object = {
  creator: "",
  amount: "",
  fee: "",
  collateral: "",
  deadline: "",
};

export const MsgRequestLoan = {
  encode(message: MsgRequestLoan, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.collateral !== "") {
      writer.uint32(34).string(message.collateral);
    }
    if (message.deadline !== "") {
      writer.uint32(42).string(message.deadline);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestLoan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestLoan } as MsgRequestLoan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.collateral = reader.string();
          break;
        case 5:
          message.deadline = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestLoan {
    const message = { ...baseMsgRequestLoan } as MsgRequestLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = String(object.collateral);
    } else {
      message.collateral = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = String(object.deadline);
    } else {
      message.deadline = "";
    }
    return message;
  },

  toJSON(message: MsgRequestLoan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequestLoan>): MsgRequestLoan {
    const message = { ...baseMsgRequestLoan } as MsgRequestLoan;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    } else {
      message.collateral = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = "";
    }
    return message;
  },
};

const baseMsgRequestLoanResponse: object = {};

export const MsgRequestLoanResponse = {
  encode(_: MsgRequestLoanResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestLoanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestLoanResponse } as MsgRequestLoanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRequestLoanResponse {
    const message = { ...baseMsgRequestLoanResponse } as MsgRequestLoanResponse;
    return message;
  },

  toJSON(_: MsgRequestLoanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRequestLoanResponse>): MsgRequestLoanResponse {
    const message = { ...baseMsgRequestLoanResponse } as MsgRequestLoanResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Request(request: MsgRequest): Promise<MsgRequestResponse>;
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  Repay(request: MsgRepay): Promise<MsgRepayResponse>;
  Liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
  Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Request(request: MsgRequest): Promise<MsgRequestResponse> {
    const data = MsgRequest.encode(request).finish();
    const promise = this.rpc.request("username.loan.loan.Msg", "Request", data);
    return promise.then((data) => MsgRequestResponse.decode(new Reader(data)));
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("username.loan.loan.Msg", "Approve", data);
    return promise.then((data) => MsgApproveResponse.decode(new Reader(data)));
  }

  Repay(request: MsgRepay): Promise<MsgRepayResponse> {
    const data = MsgRepay.encode(request).finish();
    const promise = this.rpc.request("username.loan.loan.Msg", "Repay", data);
    return promise.then((data) => MsgRepayResponse.decode(new Reader(data)));
  }

  Liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse> {
    const data = MsgLiquidate.encode(request).finish();
    const promise = this.rpc.request(
      "username.loan.loan.Msg",
      "Liquidate",
      data
    );
    return promise.then((data) =>
      MsgLiquidateResponse.decode(new Reader(data))
    );
  }

  Cancel(request: MsgCancel): Promise<MsgCancelResponse> {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request("username.loan.loan.Msg", "Cancel", data);
    return promise.then((data) => MsgCancelResponse.decode(new Reader(data)));
  }

  RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse> {
    const data = MsgRequestLoan.encode(request).finish();
    const promise = this.rpc.request(
      "username.loan.loan.Msg",
      "RequestLoan",
      data
    );
    return promise.then((data) =>
      MsgRequestLoanResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
