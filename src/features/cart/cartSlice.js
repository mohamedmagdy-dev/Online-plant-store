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
      state.quantity++;
      state.totalPrice += action.payload.price;
      state.products.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
