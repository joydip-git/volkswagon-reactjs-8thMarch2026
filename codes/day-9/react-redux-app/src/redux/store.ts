import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./countslice";
import { nameReducer } from "./nameslice";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
    countState: countReducer,
    nameState: nameReducer
})
const logger = createLogger()
const AppStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type StoreStateMapType = ReturnType<typeof AppStore.getState>
export type StoreDispatchActionType = typeof AppStore.dispatch
export default AppStore