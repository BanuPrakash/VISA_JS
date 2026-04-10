import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

export default function Details() {
  let {id} = useParams();
  let [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
    .then(response => response.json())
    .then (data => setProduct(data));
  }, [id]);

  return (
    <div>
      <h1>Details of {id}</h1>
      {
        product && ( <div>
             <img src={product.images[0]} />
              {product.description}
              <br />
              {product.brand}
          </div>)
      }
     
      </div>
  )
}
