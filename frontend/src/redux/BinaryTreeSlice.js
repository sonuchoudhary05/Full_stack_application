// src/redux/binaryTreeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const binaryTreeSlice = createSlice({
  name: "binaryTree",
  initialState: {
    pathSum: 0,
  },
  reducers: {
    setBinaryTreePathSum: (state, action) => {
      state.pathSum = action.payload;
    },
  },
});

export const { setBinaryTreePathSum } = binaryTreeSlice.actions;
export default binaryTreeSlice.reducer;
