// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import longestSubstringReducer from "./LongestSubstringSlice";
import binaryTreeReducer from "./BinaryTreeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    longestSubstring: longestSubstringReducer,
    binaryTree: binaryTreeReducer,
  },
});

export default store;
