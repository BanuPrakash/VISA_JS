export default function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let item = { ...action.payload };
            item.qty = 1;
            item.amount = item.productPrice;

            let itms = [...state.cartItems, item];
            return {
                cartItems: itms,
                total: itms.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0)
            }
        case 'INCREMENT': return state;
        case 'DECREMENT': return state;
        case 'CLEAR_CART': return {
            cartItems: [],
            total: 0
        }
        default: return state;
    }
}