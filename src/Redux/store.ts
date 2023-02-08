import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk"

import {reducer as AppReducer} from "./app/app.reducer"

const rootReducer=combineReducers({AppReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch


export type RootState = ReturnType<typeof store.getState>


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector