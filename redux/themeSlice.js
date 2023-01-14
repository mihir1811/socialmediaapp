import { createSlice } from "@reduxjs/toolkit";

const themeSlice  = createSlice({
    name:"theme" ,
    initialState:{
        theme:""
    } , 
    reducers:{
        changeTheme(state , action){
            return  "theme changed"
        } ,

    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer