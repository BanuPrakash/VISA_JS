import React from 'react'
import { Button } from 'react-bootstrap'

export default function CartRow({product}) {
  return (
    <div className='row'>
        <div className='col-md-2'>
          <img src = {product.images[0]} style={{"width": "100px"}} />
        </div>
        <div className='col-md-2'>
          {product.title}
        </div>
        <div className='col-md-4'>
          <Button>-</Button>
          &nbsp;
          {product.qty}
          &nbsp;
          <Button>+</Button>
        </div>
          <div className='col-md-2'>
        Price: {product.price}
        </div>
          <div className='col-md-2'>
        Amount: {product.amount}
        </div>
    </div>
  )
}
