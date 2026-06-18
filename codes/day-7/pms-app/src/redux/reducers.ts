import type { ProductsActionType, ProductsStateType } from "./types";

const initialProductsState: ProductsStateType = {
    products: [],
    isRequestOver: false,
    error: ''
}

export const productsReducer = (state = initialProductsState, action: ProductsActionType<T>) => {

    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }
}