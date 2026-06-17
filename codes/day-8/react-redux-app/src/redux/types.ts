export type AppActionType<T> = {
    type: string,
    payload?: T
}

export type CountStateType = {
    count: number
}
export type NameStateType = {
    name: string
}