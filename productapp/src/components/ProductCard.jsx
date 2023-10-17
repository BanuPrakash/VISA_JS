import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ product }) {
    let { id, productDescription, productImageUrl, productName, productPrice } = product;
    return <div className="col-md-4 col-xl-3">
        <div className="card">
            <img src={productImageUrl} className="card-img-top" alt="Mobile" />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">
                    {productDescription}
                </p>
            </div>
            <div className="card-footer">
                Rs. {productPrice}
                &nbsp;
                <FontAwesomeIcon color="red" icon={faHeart}/>
                &nbsp;
                <FontAwesomeIcon color="blue" icon={faShoppingCart}/>
            </div>
        </div>
    </div>
}