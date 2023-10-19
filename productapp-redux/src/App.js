import './App.css';
import { Suspense, lazy } from 'react';
import NavbarComp from './components/NavbarComp';
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Default from './components/Default'

// lazy loading
const Cart = lazy(() => import('./components/Cart'))
const ProductForm = lazy(() => import('./components/ProductForm'))
const Details = lazy(() => import('./components/Details'))


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>loading cart...</h1>}>
            <Cart />
          </Suspense>
        } />
        <Route path='/new_product' element={
          <Suspense fallback={<h1>loading form...</h1>}>
            <ProductForm />
          </Suspense>
        } />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>loading details...</h1>}>
            <Details />
          </Suspense>
        } />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
