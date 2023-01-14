import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"


const store  = configureStore({
    reducer:themeReducer
})

export default store