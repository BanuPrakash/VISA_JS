import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "../api/productApi"

const initialState = {
    products: [],
    loading: 'idle',
    error: ''
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.products = [];
            state.loading = "pending";
            state.error = "";
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = "idle";
            state.error = "";
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.products = [];
            state.loading = "idle";
            state.error = action.payload;
        })
    },
})

export default productsSlice.reducer;
