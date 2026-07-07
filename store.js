import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/features/cart/cartSlicer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});