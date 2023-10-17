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
        case 'INCREMENT': 
        let items = state.cartItems;
        items.forEach(item => {
            if(item.id === action.payload) {
                item.qty++;
                item.amount = item.productPrice * item.qty;
            }
        })
        return {
            cartItems: items,
            total:items.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0)
        };
        
        case 'DECREMENT': return state;
        case 'CLEAR_CART': return {
            cartItems: [],
            total: 0
        }
        default: return state;
    }
}