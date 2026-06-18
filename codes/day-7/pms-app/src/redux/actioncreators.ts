import type { Product } from "../models/product"
import { actionTypes } from "./actiontypes"
import type { ProductsActionType } from "./types"

export const fetchInitiateActionCreator = (): ProductsActionType<undefined> => {
    return {
        type: actionTypes.FETCH_INITIATE
    }
}

export const fetchSuccessActionCreator = (payloadvalue: Product[]): ProductsActionType<Product[]> => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        payload: payloadvalue
    }
}

export const fetchFailedActionCreator = (payloadvalue: string): ProductsActionType<string> => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        payload: payloadvalue
    }
}