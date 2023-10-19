import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchProducts from "../redux/api/productApi";

export default function ProductList() {
    let { products, loading, error } = useSelector(state => state.products)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    
    return <Container>
        <div className="row">
            {
                (loading === "pending") ? <h1>Loading...</h1> :
                    products.map(product => <ProductCard
                        product={product} key={product.id} />)
            }
        </div>
    </Container>
}