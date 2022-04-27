package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRequest = "request"

var _ sdk.Msg = &MsgRequest{}

func NewMsgRequest(creator string, loan string) *MsgRequest {
	return &MsgRequest{
		Creator: creator,
		Loan:    loan,
	}
}

func (msg *MsgRequest) Route() string {
	return RouterKey
}

func (msg *MsgRequest) Type() string {
	return TypeMsgRequest
}

func (msg *MsgRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
