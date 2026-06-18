import type { Product } from '../models/product'
export type ProductsStateType = {
    products: Product[],
    error: string,
    isRequestOver: boolean
}

export type ProductsActionType<T> = {
    type: string,
    payload?: T
}