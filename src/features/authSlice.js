import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

// Login action
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const token = response.data.token; // Assuming token is returned as response.data.token
    if (token) {
      localStorage.setItem('token', token); // Save token to localStorage
    }
    return { token, username: response.data.username }; // Save token and username
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

// Register action
export const register = createAsyncThunk('auth/register', async (registrationData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/register`, registrationData);
    return response.data; // Assuming registration response contains success message
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

// Logout action
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    localStorage.removeItem('token'); // Remove token from localStorage
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred during logout');
  }
});

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // User data
    isLoading: false, // Loading state
    error: null, // Error message
    success: false, // Success state
    token: localStorage.getItem('token') || null, // Load token from localStorage
  },
  reducers: {
    clearState: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.token = null;
      localStorage.removeItem('token'); // Clear token from localStorage
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
        state.user = action.payload.username; // Save username
        state.token = action.payload.token;   // Save JWT token
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
        state.success = true; // Registration successful
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.success = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
