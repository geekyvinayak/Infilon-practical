// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import apiDataSliceReducer from "./apiDataSlice";

export const store = configureStore({
  reducer: {
    apiData: apiDataSliceReducer,
  },
});
