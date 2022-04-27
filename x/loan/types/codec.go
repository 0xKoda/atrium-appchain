package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRequest{}, "loan/Request", nil)
	cdc.RegisterConcrete(&MsgApprove{}, "loan/Approve", nil)
	cdc.RegisterConcrete(&MsgRepay{}, "loan/Repay", nil)
	cdc.RegisterConcrete(&MsgLiquidate{}, "loan/Liquidate", nil)
	cdc.RegisterConcrete(&MsgCancel{}, "loan/Cancel", nil)
	cdc.RegisterConcrete(&MsgRequestLoan{}, "loan/RequestLoan", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApprove{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRepay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLiquidate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancel{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRequestLoan{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
