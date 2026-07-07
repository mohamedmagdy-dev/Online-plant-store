import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 9,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addProduct(state, action) {
      state.quantity++;
      console.log(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
