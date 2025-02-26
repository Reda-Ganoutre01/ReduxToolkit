import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../features/UserSlice";

export const Store=configureStore(
    {
    reducer:{
        user:userSlice
    },
    
}
)