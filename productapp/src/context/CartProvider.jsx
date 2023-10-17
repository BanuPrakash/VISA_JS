import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();

const initialState = {
    cartItems: [],
    total: 0
}
export default function CartProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product) {
        dispatch({type: 'ADD_TO_CART', payload: product});
    }

    function increment(id) {
        dispatch({type:'INCREMENT', payload: id});
    }

    function checkout() {
        dispatch({type:'CLEAR_CART'});
    }

    return <CartContext.Provider value={{
                products: state.cartItems, 
                total: state.total,
                addToCart, 
                increment, 
                checkout}}>
        {props.children}
    </CartContext.Provider>
}

export {
    CartContext
}