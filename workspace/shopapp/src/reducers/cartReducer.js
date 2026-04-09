export default function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            let item = {...action.payload, qty: 1, amount: action.payload.price};
            return {
                "items": [...state.items, item],
                "quantity": state.quantity + 1,
                "total": state.total + item.amount
            }
        case 'INCREMENT':
            return state;
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