import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();

const initialState = {
    cartItems: [],
    total: 0
}
export default function CartProvider(props) {
    let navigate = useNavigate();
    let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id });
    }

    function checkout() {
        //window.sessionStorage.setItem("user", "banu@gmail.com"); //login success
        let order = {};
        order.customer = window.sessionStorage.getItem("user");
        order.total = state.total;
        order.items = state.cartItems;

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("Order placed!!!");
            dispatch({ type: 'CLEAR_CART' });
            navigate("/");
        })

    }

    return <CartContext.Provider value={{
        products: state.cartItems,
        total: state.total,
        addToCart,
        increment,
        checkout
    }}>
        {props.children}
    </CartContext.Provider>
}

export {
    CartContext
}