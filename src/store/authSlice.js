import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,  // Represents if the user is logged in (true) or not (false)
    userData: null,  // Stores user details after login
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {    // reducers (functions that modify state) for login & logout.
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;