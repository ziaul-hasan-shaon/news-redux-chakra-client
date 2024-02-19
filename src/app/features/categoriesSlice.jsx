import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoriesData = createAsyncThunk('categories/fetchCategoriesData', async() => {
    const res = await axios.get('http://localhost:5000/categories')
    console.log(res.data);
    return res.data;
})

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        categories: [],
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchCategoriesData.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchCategoriesData.fulfilled, (state, action) => {
            state.isLoading = false,
            state.categories = action.payload,
            state.error = null
        })
        builder.addCase(fetchCategoriesData.rejected, (state, action) => {
            state.isLoading = false,
            state.categories = [],
            state.error = action.error.message
        })
    }
})

export default categoriesSlice.reducer;