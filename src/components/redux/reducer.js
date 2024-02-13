// reducer.js

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    catg: [],
    selectedCatg: null,
    list: [],
    properties: [],
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
    setproperties(state, action) {
      state.properties = action.payload;
    },
  },
});

export const { setProduct, setCatg, setselectedCatg, setproperties } = productSlice.actions;
export default productSlice.reducer;
