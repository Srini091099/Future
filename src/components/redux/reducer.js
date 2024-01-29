// reducer.js

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    catg: [],
    selectedCatg: null,
    list: [], // Ensure you have the 'list' field in your initial state
  },
  reducers: {
    setselectedCatg(state, action) {
      state.selectedCatg = action.payload;
    },
    setProduct(state, action) {
      state.list = action.payload;
    },
    setCatg(state, action) {
      state.catg = action.payload;
    },
  },
});

export const { setProduct, setCatg, setselectedCatg } = productSlice.actions;
export default productSlice.reducer;
