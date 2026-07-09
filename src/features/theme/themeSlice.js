import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerTransparent: true,
};

const appTheme = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
    toggleHeaderTheme: (state, action) => {
      state.headerTransparent = action.payload;
    },
  },
});

export const { toggleHeaderTheme } = appTheme.actions;
export default appTheme.reducer;
