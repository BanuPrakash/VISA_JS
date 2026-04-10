import type { CartItem } from "../types";


type ActionType = {
    type: 'ADD_TO_CART',
    payload: CartItem
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type : 'CLEAR_CART'
}

export type CartState = {
    items: CartItem[],
    quantity: number,
    total: number   
}

export default function cartReducer(state: CartState, action: ActionType) {
    switch(action.type) {
         case 'ADD_TO_CART':
            let item = {...action.payload, qty: 1, amount: action.payload.price};
            return {
                "items": [...state.items, item],
                "quantity": state.quantity + 1,
                "total": state.total + item.amount
            }
        case 'INCREMENT':
          const cartitems = state.items;
          cartitems.forEach(item => {
            if(item.id === action.payload) { // will be the item id
                item.qty ++;
                item.amount = item.price * item.qty; // tax, discount
            }
          });
            return {    
                items: cartitems,
                total: state.items.map(item => item.amount).reduce((a,b) => a+b, 0),    
                quantity: state.quantity
            }
        case 'CLEAR_CART':
            return {
                "items" : [],
                "quantity": 0,
                "total": 0
            }
        default:
            return state;
    }
}