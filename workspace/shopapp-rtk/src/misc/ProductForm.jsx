import React from 'react'
import { Button } from 'react-bootstrap'

export default function ProductForm() {
    let titleRef = useRef();
    let priceRef = useRef();
    function doAdd() {
        let product = {
            title: titleRef.current.value,
            price: priceRef.current.value
        }
        console.log(product);
    }
  return (
    <div>
        <h1>Product Form</h1>
        <form>
            Title <input type='text' ref={titleRef}/>
            Price <input type="number" ref={priceRef} />
            <Button onClick={doAdd}>Add Product</Button>
        </form>
    </div>
  )
}
