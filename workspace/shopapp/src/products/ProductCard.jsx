import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function ProductCard({product}) {
  let {id, title, price, description, images} = product;
  return (
    <div className="col-sm-6 col-md-4">
       <Card>
        <Card.Img variant="top" src={images[0]} />
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
