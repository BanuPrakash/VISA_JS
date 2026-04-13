
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 
import { Badge } from 'react-bootstrap';
import { useAppSelector } from '../redux/store';

export default function NavbarComponent() {
  let {quantity}  = useAppSelector(state => state.cart)

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shopify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart <Badge>{quantity}</Badge></Nav.Link>
  
          </Nav>
        </Container>
      </Navbar>
  )
}
