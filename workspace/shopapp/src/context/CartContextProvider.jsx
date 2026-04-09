import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const CartContext = createContext(); // placeholder



const initialState = {
    "items": [],
    "quantity": 0,
    "total": 0
}

export default function CartContextProvider({children}) {
    let navigate = useNavigate();
 let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({type: 'ADD_TO_CART', payload: {...product, "qty": 1, "amount": product.price}})
    }
    function checkout() {
        let order = {};
        //window.sessionStorage.setItem("customer", "banu@gmail.com");
        order.customer = window.sessionStorage.getItem("customer");
        order.date = new Date();
        order.items = state.items;
        order.total = state.total;

        axios.post("http://localhost:1234/orders", order).then(response => {
            dispatch({type:'CLEAR_CART'});
            navigate("/");
        })
        
    }
  return (
    <CartContext.Provider value={{...state, addToCart, checkout}}> 
        {children}
    </CartContext.Provider>
  )
}
