import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Async actions for login and registration
export const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    // Store the token in localStorage after successful login
    localStorage.setItem("authToken", response.data.token);
    return response.data; // Return the response data (including the token)
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Slice to manage authentication state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("authToken") || null, // Get the token from localStorage if it exists
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken"); // Clear token from localStorage
    },
    setAuthenticated: (state, action) => {
      state.token = action.payload;  // Sync token from localStorage to Redux state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        localStorage.setItem("authToken", payload.token); // Store token in localStorage
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        localStorage.setItem("authToken", payload.token); // Store token in localStorage
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
