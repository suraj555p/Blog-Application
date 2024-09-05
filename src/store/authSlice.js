import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
    loading: false, 
    error: null, 
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout : (state)=>{
            state.status=false;
            state.userData=null;
        },
        setAuthError: (state, action) => {
            state.error = action.payload;
        },
        setAuthLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const {login,logout,setAuthError, setAuthLoading} = authSlice.actions;

export default authSlice.reducer;