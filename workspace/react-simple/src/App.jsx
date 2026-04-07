

function App() {
  // bad code
  let product = {
    "name" : "iPhone 17",
    "price": 120933.33
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
    </div>
  )
}

export default App
