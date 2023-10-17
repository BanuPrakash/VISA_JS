import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Details() {
    let { id } = useParams("id");    // Path parameter http://localhost:3000/details/1
    let [product, setProduct] = useState();
   
    useEffect(() => {
        axios.get("http://localhost:1234/products/" + id).then(response => {
            setProduct(response.data);
        });
    }, [id]);

    return <div className="container">
        {product && <div className="row">
            <div className="col-md-4">
                <img src={product.productImageUrl} />
            </div>
            <div className="col-md-8">
                Name: {product.productName} <br />
                Description : {product.productDescription} <br />
                Price: {product.productPrice}
            </div>
        </div>
        }
    </div>
}