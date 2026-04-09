import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow'


export default function CartList() {
  let {items, total, checkout} = useContext(CartContext);
  return (
    <Container>
      <div>
        {
          items.map(product => <CartRow product={product} key={product.id} />)
        }
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total : { total }</div>
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button onClick={checkout}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
