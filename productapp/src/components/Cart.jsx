import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
import { CartItem } from "./CartItem";
import { Button } from "react-bootstrap";

export default function Cart() {
    let {products, total, checkout} = useContext(CartContext); // Consumer
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