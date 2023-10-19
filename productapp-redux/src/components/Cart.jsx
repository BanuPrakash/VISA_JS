import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CartItem from './CartItem';
import { actions } from "../redux/features/cartSlice";

export default function Cart() {
    const {clear} = actions;
    const dispatch = useDispatch();
    const {cartItems: products, total} = useSelector((state) => state.cart)

    function checkout() {
        // axios call to place order
        dispatch(clear());
    }
    return <div className="container">
    {
     products.map(product => <CartItem  product={product} key ={product.id} />)
    }
    <div className="row">
     <div className="col-md-10">&nbsp;</div>
     <div className="col-md-2">Total: {total}</div>
    </div>
    <div className="row">
     <div className="col-md-10">&nbsp;</div>
     <div className="col-md-2">
         <Button onClick={() => checkout()}>Checkout</Button>
     </div>
    </div>
 </div>
}