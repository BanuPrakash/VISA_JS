import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
    'products',
    async () => {
      const response = await fetch(`http://localhost:1234/products`)
      return (await response.json()) 
    }
  )

  export default fetchProducts;