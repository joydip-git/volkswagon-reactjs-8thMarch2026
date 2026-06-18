import type { AxiosResponse } from "axios";
import type { Product } from "../models/product";
import axiosInstance from "../config/axiosinstance";
import type { ApiResponse } from "../models/apiresponse";

export const getProducts = (): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosInstance.get<ApiResponse<Product[]>>('')
}

export const getProduct = (id: number): Promise<AxiosResponse<ApiResponse<Product>>> => {
    return axiosInstance.get<ApiResponse<Product>>(`${id}`)
}

export const addProduct = (p: Product): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosInstance.post<ApiResponse<Product[]>>('', p)
}

export const updateProduct = (id: number, p: Product): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosInstance.put<ApiResponse<Product[]>>(`${id}`, p)
}

export const deleteProduct = (id: number): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosInstance.delete<ApiResponse<Product[]>>(`${id}`)
}