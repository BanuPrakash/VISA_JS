import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import type { Product } from '../types';

type AppProps = {
  product: Product
}

export default function ProductCard({product}: AppProps) {
  let {id, title, price, description, images} = product;
 
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
          <Button variant='success'>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
