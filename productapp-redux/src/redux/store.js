import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './features/cartSlice'

const store = configureStore({
    reducer: {
        cart: reducers // combineReducer
    },
    devTools: true
})

export default store;