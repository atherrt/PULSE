import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base API URL (replace with your backend endpoint)
const API_URL = 'https://245d-103-207-87-227.ngrok-free.app/api/auth';

// Async thunks for API calls

// Login
export const login = createAsyncThunk('/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials); // Corrected URL
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "An error occurred");
  }
});

// Register
export const register = createAsyncThunk(
  'auth/register',
  async (registrationData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/register`, registrationData); // Corrected URL
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // User data
    isLoading: false, // Loading state
    error: null, // Error message
    success: false, // Success flag for feedback
  },
  reducers: {
    clearState: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Save user data
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Save user data after registration
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
