import { countActionTypes, nameActionTypes } from "./actiontypes"
import type { AppActionType, CountStateType, NameStateType } from "./types"

const countInitialState: CountStateType = {
    count: 0
}
const nameInitialState: NameStateType = {
    name: ''
}

export const countReducer = (state = countInitialState, action: AppActionType<number>) => {
    switch (action.type) {
        case countActionTypes.INCREASE:
            return {
                ...state,
                //count: state.count + 1
                count: (action.payload ? action.payload : 1)
            }

        case countActionTypes.DECREASE:
            return {
                ...state,
                //count: state.count - 1
                count: (action.payload ? action.payload : 1)
            }

        default:
            return {
                ...state
            }
    }
}

export const nameReducer = (state = nameInitialState, action: AppActionType<string>) => {
    switch (action.type) {
        case nameActionTypes.CHANGE:
            return {
                ...state,
                name: action.payload ? action.payload : ''
            }

        default:
            return {
                ...state
            }
    }
}
