import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit"
import type { CountStateType } from "./types"

const countInitialState: CountStateType = {
    count: 0
}

const countSlice = createSlice({
    name: 'countSlice',
    initialState: countInitialState,
    reducers: {
        increase: (state: WritableDraft<CountStateType>, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        decrease: (state, action: PayloadAction<number>) => {
            state.count -= action.payload
        }
    }
})

//create a reducer from the slice
export const countReducer = countSlice.reducer;

//create a actionCreators from the slice
export const {
    increase: increaseActionCreator,
    decrease: decreaseActionCreator
} = countSlice.actions