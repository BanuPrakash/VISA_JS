import axios from "axios";
import { createContext, useEffect, useState } from "react";

let ProductContext = createContext(); 

export default function ProductProvider(props) {
    let [products, setProducts] = useState();

    // componentDidMount
    useEffect(() => {
        axios.get("http://localhost:1234/products").then(response => {
            setProducts(response.data);
        });
    }, []);

    return <ProductContext.Provider value={{products}}>
        {props.children}
    </ProductContext.Provider>
}

export {
    ProductContext
};