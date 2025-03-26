import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,  // register the reducer
    }
});

export default store;