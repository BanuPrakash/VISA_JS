import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './features/cartSlice'
import productReducer from './features/productSlice';

const store = configureStore({
    reducer: {
        cart: reducers, // combineReducer
        products: productReducer
    },
    devTools: true
})

export default store;