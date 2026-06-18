import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { NameStateType } from "./types"

const nameInitialState: NameStateType = {
    name: ''
}

const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: nameInitialState,
    reducers: {
        change: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const nameReducer = nameSlice.reducer
export const { change: changeNameActionCreator } = nameSlice.actions
