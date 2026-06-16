//import axios, { type AxiosResponse } from "axios"

import type { AxiosResponse } from "axios"
import axiosInstance from "../config/axiosconfig"
import type { Todo } from "../models/todo"


// const url = 'https://jsonplaceholder.typicode.com/todos'

// export async function getTodos(): Promise<Todo[]> {
//     const response: Response = await fetch(url)
//     const todos = await response.json()
//     return todos as Todo[]
// }

export async function getTodos(): Promise<Todo[]> {
    // const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(url)

    const response: AxiosResponse<Todo[]> = await axiosInstance.get<Todo[]>('')

    if (response.status === 200) {
        return response.data
    } else {
        throw new Error(`Error: Something went wrong. Status Text is:${response.statusText}`)
    }
}

export async function getTodo(id: number):Promise<Todo> {
    const response: AxiosResponse<Todo> = await axiosInstance.get<Todo>(`${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        throw new Error(`Error: Something went wrong. Status Text is:${response.statusText}`)
    }
}

export const addTodo = async (todo: Todo) => {
    const response: AxiosResponse<Todo> = await axiosInstance.post<Todo>('', todo)
    return response.data
}