import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList() {
    let { products } = useContext(ProductContext); // consumer
    return <Container>
        <div className="row">
            {
                products && products.map(product => <ProductCard product={product} key={product.id} />)
            }
        </div>
    </Container>
}