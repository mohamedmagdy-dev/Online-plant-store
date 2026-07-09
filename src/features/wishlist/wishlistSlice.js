import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload
      if (state.products.some((item) => item.id === product.id)) {
        state.products = state.products.filter((item) => item.id !== product.id)
      } else {
        state.products.push(product)
      }
    },
    clearWishlist: (state) => {
      state.products = []
    }
  }
})


export const { addToWishlist, clearWishlist } = wishlist.actions

export default wishlist.reducer