import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  minPrice: 0,
  maxPrice: 1000,
  rating: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      if (state.category.includes(action.payload)) {
        state.category = state.category.filter((el) => el !== action.payload);
      } else {
        state.category.push(action.payload);
      }
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    toggleRating: (state, action) => {
      if (state.rating.includes(action.payload)) {
        state.rating = state.rating.filter((el) => el !== action.payload);
      } else {
        state.rating.push(action.payload);
      }
    },
  },
});

export const { toggleCategory, setMinPrice, setMaxPrice, toggleRating } =
  filterSlice.actions;
export default filterSlice.reducer;
