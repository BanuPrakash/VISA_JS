import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartProvider";

export function CartItem({ product }) {
    let {increment} = useContext(CartContext);

    return <div className="row">
        <div className="col-md-2">
            <img src={product.productImageUrl} style={{ width: '50px' }} />
        </div>
        <div className="col-md-2">
            Name : {product.productName}
        </div>
        <div className="col-md-2">
            Price: {product.productPrice}
        </div>
        <div className="col-md-4">
            <Button>-</Button>
            &nbsp;
            {product.qty}
            &nbsp;
            <Button onClick={() => increment(product.id)}>+</Button>
        </div>
        <div className="col-md-2">
            Amount: {product.amount}
        </div>
    </div>
}