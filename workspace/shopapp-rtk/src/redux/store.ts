import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cartSlice";
import { profileReducer } from "./features/profileSlice";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    // root reducer, no need to write combineReducers(...)
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    },
    // devTools: true //compose(window.__REDUX_DEVTOOLS_EXTENSION__())
})

// check ReturnTypeOf in TS session, infer
export type RootState = ReturnType<typeof store.getState>
// useSelector() hook is to get state from store, not type-safe
// same as mapStateToProps
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export default store;