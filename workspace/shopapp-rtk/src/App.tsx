import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './misc/NavbarComponent'
import ProductList from './products/ProductList'
import CartList from './cart/CartList'
import Details from './misc/Details'
import Default from './misc/Default'
import { PokemonList } from './misc/PokemonList'
// import { connect } from 'react-redux'


function App() {
  return (
   <div>
      <NavbarComponent />
      {/* Routes is like Switch, Route is case */}
      <Routes> 
        <Route path='/products' element={<ProductList />}/>
        <Route path='/cart' element={<CartList />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/pokemon' element={<PokemonList />}/>
        <Route path='/' element={<ProductList />}/>
        <Route path='*' element={<Default />}/>
      </Routes>
   </div>
  )
}

// connect(mapStateToProps, mapDispatchtoProps)(App);

export default App
