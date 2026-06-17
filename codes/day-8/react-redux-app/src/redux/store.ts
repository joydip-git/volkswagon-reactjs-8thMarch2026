import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { countReducer, nameReducer } from "./reducers";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
    countState: countReducer,
    nameState: nameReducer
})
const logger = createLogger()
const AppStore = legacy_createStore(rootReducer, applyMiddleware(logger))

//ReturnType: Obtain the return type of a function type
export type AppStateMapType = ReturnType<typeof AppStore.getState>
export type AppDispatchType = typeof AppStore.dispatch
export default AppStore