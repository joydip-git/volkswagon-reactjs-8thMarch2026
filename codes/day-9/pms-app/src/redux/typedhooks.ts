import { useDispatch, useSelector } from "react-redux";
import { type StoreDispatchActionType, type StoreStateMapType } from "./store";

export const useTypedSelector = useSelector.withTypes<StoreStateMapType>()
export const useTypedDispatch = useDispatch.withTypes<StoreDispatchActionType>()