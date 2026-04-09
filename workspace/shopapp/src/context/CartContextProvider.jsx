import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext(); // placeholder



const initialState = {
    "items": [],
    "quantity": 0,
    "total": 0
}

export default function CartContextProvider({children}) {
 let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({type: 'ADD_TO_CART', payload: {...product, "qty": 1, "amount": product.price}})
    }
    function checkout() {
        dispatch({type:'CLEAR_CART'})
    }
  return (
    <CartContext.Provider value={{...state, addToCart, checkout}}> 
        {children}
    </CartContext.Provider>
  )
}
