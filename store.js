import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/features/cart/cartSlice";
import productsReducer from "./src/features/products/productsSlice";
import filterReducer from "./src/features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});
