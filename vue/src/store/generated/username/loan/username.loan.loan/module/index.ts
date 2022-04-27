// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancel } from "./types/loan/tx";
import { MsgRepay } from "./types/loan/tx";
import { MsgRequestLoan } from "./types/loan/tx";
import { MsgLiquidate } from "./types/loan/tx";
import { MsgRequest } from "./types/loan/tx";
import { MsgApprove } from "./types/loan/tx";


const types = [
  ["/username.loan.loan.MsgCancel", MsgCancel],
  ["/username.loan.loan.MsgRepay", MsgRepay],
  ["/username.loan.loan.MsgRequestLoan", MsgRequestLoan],
  ["/username.loan.loan.MsgLiquidate", MsgLiquidate],
  ["/username.loan.loan.MsgRequest", MsgRequest],
  ["/username.loan.loan.MsgApprove", MsgApprove],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCancel: (data: MsgCancel): EncodeObject => ({ typeUrl: "/username.loan.loan.MsgCancel", value: MsgCancel.fromPartial( data ) }),
    msgRepay: (data: MsgRepay): EncodeObject => ({ typeUrl: "/username.loan.loan.MsgRepay", value: MsgRepay.fromPartial( data ) }),
    msgRequestLoan: (data: MsgRequestLoan): EncodeObject => ({ typeUrl: "/username.loan.loan.MsgRequestLoan", value: MsgRequestLoan.fromPartial( data ) }),
    msgLiquidate: (data: MsgLiquidate): EncodeObject => ({ typeUrl: "/username.loan.loan.MsgLiquidate", value: MsgLiquidate.fromPartial( data ) }),
    msgRequest: (data: MsgRequest): EncodeObject => ({ typeUrl: "/username.loan.loan.MsgRequest", value: MsgRequest.fromPartial( data ) }),
    msgApprove: (data: MsgApprove): EncodeObject => ({ typeUrl: "/username.loan.loan.MsgApprove", value: MsgApprove.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
