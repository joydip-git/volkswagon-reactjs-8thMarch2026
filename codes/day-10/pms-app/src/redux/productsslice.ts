import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit";
import type { ProductsStateType } from "./types";
import type { Product } from "../models/product";

const initialProductsState: ProductsStateType = {
    products: [],
    error: '',
    isRequestOver: false
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: initialProductsState,
    reducers: {
        fetch_initiate: (state: WritableDraft<ProductsStateType>) => {
            state.error = ''
            state.isRequestOver = false
            state.products = []
        },
        fetch_success: (state, action: PayloadAction<Product[]>) => {
            state.error = ''
            state.isRequestOver = true
            state.products = action.payload
        },
        fetch_failure: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.products = []
            state.isRequestOver = true
        }
    }
})

export const {
    fetch_initiate: fetchInitiateActionCreator,
    fetch_success: fetchSuccessActionCreator,
    fetch_failure: fetchFailureActionCreator
} = productsSlice.actions

export const productsReducer = productsSlice.reducer
/**
 * {
 *    fetch_initiate, -> ['productsSlice/fetch_initiate']
 *    fetch_success, 
 *    fetch_failure   
 * }
 */