import { configureStore } from "@reduxjs/toolkit";
import onBoardingSlice from "./slices/onBoardingSlice.js";

export const store = configureStore({
    reducer:{
        onboarding:onBoardingSlice
    }
})