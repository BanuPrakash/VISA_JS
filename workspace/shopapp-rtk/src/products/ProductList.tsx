import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {Container} from 'react-bootstrap'
import type { Product } from "../types";
import { useProductsQuery } from "../api/productsApi";


export default function ProductList() {

  let {data, isLoading, isFetching, isError, refetch } = useProductsQuery(undefined, {
    pollingInterval:5000
  });  
 

  if(isLoading) {
    return <div>Loading ...</div>
  }
  if(isFetching) {
    return <div>Fetching from Cache ...</div>
  }
  if(isError) {
    return <div>Boom :-( Something went wrong!!!</div>
  }
  // products is state
  // always mutate products using setProducts() function
  return (
  
    <Container>
      <div className="row">
          {
          data?.products && data?.products.map(product => <ProductCard product={product} key={product.id} />)
        }
      </div>
    
    </Container>
  )
}

// Old Code:
// export default function ProductList() {
//   let [products, setProducts] = useState<Product[]>();
//   // let [count, setCount] = useState<number>(0);

//   // componentDidMount()
//   // called only once
//   useEffect(() => {
//     fetch("https://dummyjson.com/products?limit=6")
//     .then(response => response.json())
//     .then(data => setProducts(data.products));
//   },[]); // empty depdenency

//   // componentDidUpdate
//   // gets called whenever count changes
//   //  useEffect(() => {

//   //  }, [count]); 

//   // products is state
//   // always mutate products using setProducts() function
//   return (
//     <Container>
//       <div className="row">
//           {
//           products && products.map(product => <ProductCard product={product} key={product.id} />)
//         }
//       </div>
    
//     </Container>
//   )
// }
