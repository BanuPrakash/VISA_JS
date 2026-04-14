// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product, ProductsResponse } from '../types'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // https://dummyjson.com/products
    products: builder.query<ProductsResponse, void>({
      query: () => `products`,
    }),
    // https://dummyjson.com/products/3
    product: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    productByCategory: builder.query<Product, number>({
      query: (category) => `products?category=${category}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useProductQuery, useProductsQuery, useProductByCategoryQuery } = productApi