import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsslice";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
    productsState: productsReducer
})

const PmsStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(createLogger())
})

export type StoreStateMapType = ReturnType<typeof PmsStore.getState>
export type StoreDispatchActionType = typeof PmsStore.dispatch

export default PmsStore