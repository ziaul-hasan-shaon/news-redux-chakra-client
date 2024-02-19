import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewsData = createAsyncThunk('news/fetchNewsData', async() => {
    const res = await axios.get('http://localhost:5000/news')
    console.log(res.data)
    return res.data;
} )
export const newsSlice = createSlice({
    name: "news",
    initialState: {
        isLoading: false,
        news: [],
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchNewsData.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchNewsData.fulfilled, (state, action) => {
            state.isLoading = false,
            state.news = action.payload,
            state.error = null
        })
        builder.addCase(fetchNewsData.rejected, (state, action) => {
            state.isLoading = false,
            state.news = [],
            state.error = action.error.message
        })
    }
})

export default newsSlice.reducer;