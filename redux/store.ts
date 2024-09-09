import { configureStore } from "@reduxjs/toolkit";
import statsSlice from "./statsSlice";

export const store = configureStore({
    reducer: {
        stats: statsSlice
    },
})