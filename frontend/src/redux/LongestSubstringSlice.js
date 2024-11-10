// src/redux/longestSubstringSlice.js
import { createSlice } from "@reduxjs/toolkit";

const longestSubstringSlice = createSlice({
  name: "longestSubstring",
  initialState: {
    length: 0,
    substrings: [],
  },
  reducers: {
    setLongestSubstringResult: (state, action) => {
      state.length = action.payload.length;
      state.substrings = action.payload.substrings;
    },
  },
});

export const { setLongestSubstringResult } = longestSubstringSlice.actions;
export default longestSubstringSlice.reducer;
