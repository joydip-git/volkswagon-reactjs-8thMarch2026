import { useDispatch, useSelector } from "react-redux";
import { type AppDispatchType, type AppStateMapType } from "./store";


//withTypes() method: Creates a "pre-typed" version of useSelector where the state type is predefined.
//This allows you to set the state type once, eliminating the need to specify it with every useSelector call.
export const appUseSelector = useSelector.withTypes<AppStateMapType>()
export const appUseDispatch = useDispatch.withTypes<AppDispatchType>()