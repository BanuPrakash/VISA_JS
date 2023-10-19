import { createSlice } from '@reduxjs/toolkit';

function cartAddlogic(state, action) {
    let item = { ...action.payload };
    item.qty = 1;
    item.amount = item.productPrice;
    state.cartItems.push(item);
    state.total = state.total + item.amount;
}

const initialState = {
    cartItems: [],
    total: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: cartAddlogic,
        increment: (state, action) => {
            state.cartItems.forEach(item => {
                if (item.id === action.payload) {
                    item.qty++;
                    item.amount = item.qty * item.productPrice;
                }
            });
            state.total = state.cartItems.
                map(item => item.amount).
                reduce((v1, v2) => v1 + v2, 0);
        },
        clear: (state) => {
            state.cartItems = [];
            state.total = 0;
        }
    }
});

let actions = cartSlice.actions;
let reducers = cartSlice.reducer;

export {
    actions, reducers
}