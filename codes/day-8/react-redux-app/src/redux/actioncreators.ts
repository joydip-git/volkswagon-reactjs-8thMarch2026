import { countActionTypes, nameActionTypes } from "./actiontypes"
import type { AppActionType } from "./types"

export const increaseActionCreator = (payloadValue: number): AppActionType<number> => {
    return {
        type: countActionTypes.INCREASE,
        payload: payloadValue
    }
}

export const decreaseActionCreator = (payloadValue: number): AppActionType<number> => {
    return {
        type: countActionTypes.DECREASE,
        payload: payloadValue
    }
}

export const changeNameActionCreator = (payloadvalue: string): AppActionType<string> => {
    return {
        type: nameActionTypes.CHANGE,
        payload: payloadvalue
    }
}