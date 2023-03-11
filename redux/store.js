import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"
import userSlice from "./userSlice";

const store  = configureStore({
    reducer:{themeReducer , userSlice}
})

export default store;