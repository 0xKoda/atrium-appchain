package loan

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/username/loan/testutil/sample"
	loansimulation "github.com/username/loan/x/loan/simulation"
	"github.com/username/loan/x/loan/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = loansimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRequest = "op_weight_msg_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRequest int = 100

	opWeightMsgApprove = "op_weight_msg_approve"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApprove int = 100

	opWeightMsgRepay = "op_weight_msg_repay"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRepay int = 100

	opWeightMsgLiquidate = "op_weight_msg_liquidate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgLiquidate int = 100

	opWeightMsgCancel = "op_weight_msg_cancel"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancel int = 100

	opWeightMsgRequestLoan = "op_weight_msg_request_loan"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRequestLoan int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	loanGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&loanGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRequest, &weightMsgRequest, nil,
		func(_ *rand.Rand) {
			weightMsgRequest = defaultWeightMsgRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRequest,
		loansimulation.SimulateMsgRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApprove int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgApprove, &weightMsgApprove, nil,
		func(_ *rand.Rand) {
			weightMsgApprove = defaultWeightMsgApprove
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApprove,
		loansimulation.SimulateMsgApprove(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRepay int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRepay, &weightMsgRepay, nil,
		func(_ *rand.Rand) {
			weightMsgRepay = defaultWeightMsgRepay
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRepay,
		loansimulation.SimulateMsgRepay(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgLiquidate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgLiquidate, &weightMsgLiquidate, nil,
		func(_ *rand.Rand) {
			weightMsgLiquidate = defaultWeightMsgLiquidate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgLiquidate,
		loansimulation.SimulateMsgLiquidate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancel, &weightMsgCancel, nil,
		func(_ *rand.Rand) {
			weightMsgCancel = defaultWeightMsgCancel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancel,
		loansimulation.SimulateMsgCancel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRequestLoan int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRequestLoan, &weightMsgRequestLoan, nil,
		func(_ *rand.Rand) {
			weightMsgRequestLoan = defaultWeightMsgRequestLoan
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRequestLoan,
		loansimulation.SimulateMsgRequestLoan(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
