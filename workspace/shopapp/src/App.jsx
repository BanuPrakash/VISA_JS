import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './misc/NavbarComponent'
import ProductList from './products/ProductList'
import CartList from './cart/CartList'
import Details from './misc/Details'
import Default from './misc/Default'

function App() {
  return (
   <div>
      <NavbarComponent />
      <Routes> 
        <Route path='/products' element={<ProductList />}/>
        <Route path='/cart' element={<CartList />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/' element={<ProductList />}/>
        <Route path='*' element={<Default />}/>
      </Routes>
   </div>
  )
}

export default App
