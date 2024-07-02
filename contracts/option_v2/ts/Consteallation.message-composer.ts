/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, Uint128, Coin, QueryMsg, Addr, State, Timestamp, Uint64, ArrayOfTupleOfUint64AndData, Data } from "./Consteallation.types";
export interface ConsteallationMsg {
  contractAddress: string;
  sender: string;
  create: ({
    counterOffer,
    timeStamp
  }: {
    counterOffer: Coin[];
    timeStamp: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addToMarket: ({
    amount,
    denom,
    id
  }: {
    amount: number;
    denom: string;
    id: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeFromMarket: ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  buy: ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePrice: ({
    id,
    price
  }: {
    id: number;
    price: Coin[];
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  transfer: ({
    id,
    to
  }: {
    id: number;
    to: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  execute: ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burn: ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  claim: ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class ConsteallationMsgComposer implements ConsteallationMsg {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.create = this.create.bind(this);
    this.addToMarket = this.addToMarket.bind(this);
    this.removeFromMarket = this.removeFromMarket.bind(this);
    this.buy = this.buy.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.transfer = this.transfer.bind(this);
    this.execute = this.execute.bind(this);
    this.burn = this.burn.bind(this);
    this.claim = this.claim.bind(this);
  }

  create = ({
    counterOffer,
    timeStamp
  }: {
    counterOffer: Coin[];
    timeStamp: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create: {
            counter_offer: counterOffer,
            time_stamp: timeStamp
          }
        })),
        funds: _funds
      })
    };
  };
  addToMarket = ({
    amount,
    denom,
    id
  }: {
    amount: number;
    denom: string;
    id: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_to_market: {
            amount,
            denom,
            id
          }
        })),
        funds: _funds
      })
    };
  };
  removeFromMarket = ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_from_market: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
  buy = ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          buy: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
  updatePrice = ({
    id,
    price
  }: {
    id: number;
    price: Coin[];
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_price: {
            id,
            price
          }
        })),
        funds: _funds
      })
    };
  };
  transfer = ({
    id,
    to
  }: {
    id: number;
    to: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          transfer: {
            id,
            to
          }
        })),
        funds: _funds
      })
    };
  };
  execute = ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          execute: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
  burn = ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
  claim = ({
    id
  }: {
    id: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          claim: {
            id
          }
        })),
        funds: _funds
      })
    };
  };
}