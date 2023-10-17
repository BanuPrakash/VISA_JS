import { Button } from "react-bootstrap";

export function CartItem({ product }) {
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
            <Button>+</Button>
        </div>
        <div className="col-md-2">
            Amount: {product.amount}
        </div>
    </div>
}