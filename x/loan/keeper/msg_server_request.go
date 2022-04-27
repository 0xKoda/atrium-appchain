package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/username/loan/x/loan/types"
)

func (k msgServer) Request(goCtx context.Context, msg *types.MsgRequest) (*types.MsgRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRequestResponse{}, nil
}
