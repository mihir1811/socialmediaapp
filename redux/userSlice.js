import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name:"user" ,
    initialState:{
        userData:"user"
    } , 
    reducers:{

    }
})

export const {changeTheme} = userSlice.actions
export default userSlice.reducer