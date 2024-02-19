import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./newsSlice";
import CategoriesReducer from "./categoriesSlice";
// import CategoriesIdReducer from "./CategoriesIdSlice";

const store = configureStore({
    reducer: {
        newsReducer: NewsReducer,
        categoriesReducer: CategoriesReducer,
        // categoriesIdReducer: CategoriesIdReducer
    }
})

export default store;