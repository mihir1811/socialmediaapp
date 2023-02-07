import { createSlice } from "@reduxjs/toolkit";

const themeSlice  = createSlice({
    name:"theme" ,
    initialState:{
        theme:"light"
    } , 
    reducers:{
        changeTheme(state , action){
            if(state.theme === "light"){
                return {
                    ...state , theme:"dark"
                }
            }else{
                return {
                    ...state , theme:"light"
                }         
            }
        },
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer