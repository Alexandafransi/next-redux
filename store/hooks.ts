import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRoot} from ".";


export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRoot> = useSelector