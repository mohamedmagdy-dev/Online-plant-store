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
    removeFromWishlist: (state,action) => {
      const product = action.payload
      state.products = state.products.filter((item) => item.id !== product.id)
    },
    clearWishlist: (state) => {
      state.products = []
    }
  }
})


export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlist.actions

export default wishlist.reducer