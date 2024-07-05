import { createSlice } from "@reduxjs/toolkit";

const initialAuthValue = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthValue,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

export const authAction = authSlice.actions;

export default authSlice.reducer