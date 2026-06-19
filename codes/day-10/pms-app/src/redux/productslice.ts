import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductStateType } from "./types";
import type { Product } from "../models/product";


const initialProductState: ProductStateType = {
    product: undefined,
    error: '',
    isRequestOver: false
}
const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialProductState,
    reducers: {
        fetch_product_initiate: (state) => {
            state.isRequestOver = false
            state.error = ''
            state.product = undefined
        },
        fetch_product_success: (state, action: PayloadAction<Product>) => {
            state.isRequestOver = true
            state.error = ''
            state.product = action.payload
        },
        fetch_product_faliure: (state, action: PayloadAction<string>) => {
            state.isRequestOver = true
            state.error = action.payload
            state.product = undefined
        }
    }
})

export const productReducer = productSlice.reducer
export const {
    fetch_product_initiate: fetchProductInitiateActionCreator,
    fetch_product_faliure: fetchProductFailureActionCreator,
    fetch_product_success: fetchProductSuccessActionCreator
}
    = productSlice.actions