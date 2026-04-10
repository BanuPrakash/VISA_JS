import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';


export default function ProductCard({product}) {
  let {id, title, price, description, images} = product;
  let {addToCart} = useContext(CartContext); // Consumer
  return (
    <div className="col-sm-6 col-md-4">
       <Card>
        <Link to={`/details/${id}`}>
          <Card.Img variant="top" src={images[0]} />
        </Link>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>
           {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Price ${price} &nbsp;
          <Button variant='success' onClick={() => addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
