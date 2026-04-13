import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CartItem, type Product } from "../../types"; 

type CartState = {
    items: CartItem[],
    quantity: number,
    total: number
}

const initialState:CartState = {
    items: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    'name': 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<Product>) => {
            // note: state is clone of original state
            // sent by RTK
            let item = {...action.payload, qty : 1, amount: action.payload.price};
            state.items.push(item);
            state.quantity++;
            state.total += item.amount
        },
        increment: (state, action: PayloadAction<number>) => {
                const item = state.items.find(item => item.id === action.payload);
                if(item?.qty)
                {
                    item.qty++;
                    item.amount = item.qty * item.price
                }
                state.total = state.items.map(item => item.amount).reduce((v1, v2) => v1+ v2, 0.0);

        },
        clearCart: (state) => {
            state.items = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const {addToCart, increment, clearCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer