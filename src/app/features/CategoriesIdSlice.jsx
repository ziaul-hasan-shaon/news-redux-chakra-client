/* eslint-disable no-undef */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCategoriesIdData = createAsyncThunk('categoriesId/fetchCategoriesIdData', async() => {
    const res = await axios.get(`http://localhost:5000/categories/${id}`)
    console.log(res.data)
    return res.data
})

export const categoriesIdSlice = createSlice({
    name: 'categoriesId',
    initialState: {
        isLoading: false,
        categoriesId: [],
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchCategoriesIdData.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchCategoriesIdData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categoriesId = action.payload;
            state.error = null;
        })
        builder.addCase(fetchCategoriesIdData.pending, state => {
            state.isLoading = false;
            state.categoriesId = [];
            state.error = action.error.message;
        })
    }
})

export default categoriesIdSlice.reducer