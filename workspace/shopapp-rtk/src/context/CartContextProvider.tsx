import  { createContext, useReducer } from 'react'
import cartReducer, { type CartState } from '../reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import type { CartItem, Product } from '../types';

type ContextType = {
     items: CartItem[],
     quantity: number,
     total: number,
     addToCart: (item:Product) => void,
     checkout: () => void
}

export const CartContext = createContext<ContextType>({
    items: [],
    quantity: 0,
    total: 0,
    addToCart: (item:Product) => {},
    checkout: () => {}
}); // placeholder



const initialState = {
    "items": [],
    "quantity": 0,
    "total": 0
} as CartState



type AppProps = {
    children: React.ReactNode
}
export default function CartContextProvider({children}: AppProps) {
    let navigate = useNavigate();
 let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product: Product) {
        dispatch({type: 'ADD_TO_CART', payload: {...product, "qty": 1, "amount": product.price}})
    }
    function checkout() {
        let order: any = {};
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
