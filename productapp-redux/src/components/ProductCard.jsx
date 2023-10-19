import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { actions } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
    let { addToCart } = actions;
    let dispatch = useDispatch();
    let { id, productDescription, productImageUrl, productName, productPrice } = product;
    return <div className="col-md-4 col-xl-3">
        <div className="card">
            <Link to={`/details/${id}`} as="link">
                <img src={productImageUrl} className="card-img-top" alt="Mobile" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">
                    {productDescription}
                </p>
            </div>
            <div className="card-footer">
                Rs. {productPrice}
                &nbsp;
                <FontAwesomeIcon color="red" icon={faHeart} />
                &nbsp;
                <FontAwesomeIcon
                    onClick={() => dispatch(addToCart(product))}
                    color="blue"
                    icon={faShoppingCart} />
            </div>
        </div>
    </div>
}