import { Button } from 'react-bootstrap'
import type { CartItem } from '../types'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/features/cartSlice'
type AppProps = {
  product: CartItem
}

export default function CartRow({product}: AppProps) {
  let dispatch = useDispatch();
 
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
          <Button onClick={() => dispatch(increment(product.id))}>+</Button>
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
