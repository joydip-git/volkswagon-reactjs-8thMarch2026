import type { Product } from "../models/product"

export type ProductsStateType = {
    products: Product[],
    error: string,
    isRequestOver: boolean
}

export type ProductStateType = {
    product: Product | undefined,
    error: string,
    isRequestOver: boolean
}