
import { Button, Container } from 'react-bootstrap';
import { useAppSelector } from '../redux/store';
import CartRow from './CartRow'
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/features/cartSlice';

export default function CartList() {
 let {total, items} = useAppSelector(state => state.cart)
 
  let dispatch = useDispatch();
  function doCheckout() {
      // create order
      // axios.post
      dispatch(clearCart());
 }
 
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
          <Button onClick={doCheckout}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
