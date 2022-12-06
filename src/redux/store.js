import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/data";

export const store = configureStore({
  reducer: {
    data: data,
  },
});
