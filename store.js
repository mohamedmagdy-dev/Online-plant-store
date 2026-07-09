import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/features/cart/cartSlice";
import productsReducer from "./src/features/products/productsSlice";
import filterReducer from "./src/features/filter/filterSlice";
import wishlistReducer from "./src/features/wishlist/wishlistSlice";
import appThemeReducer from "./src/features/theme/themeSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer,
    wishlist: wishlistReducer,
    appTheme: appThemeReducer,
  },
});
