import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.quantity++;
      state.totalPrice += product.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find((item) => item.id === id);

      if (existingProduct) {
        state.quantity -= existingProduct.quantity;
        state.totalPrice -= existingProduct.price * existingProduct.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find((item) => item.id === id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        state.quantity--;
        state.totalPrice -= existingProduct.price;
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.quantity--;
        state.totalPrice -= existingProduct.price;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
