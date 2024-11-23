import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base API URL (replace with your backend endpoint)
const API_URL = 'https://your-api-endpoint.com';

// Async thunks for API calls

// Login
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Register as Hospital
export const registerHospital = createAsyncThunk('auth/registerHospital', async (hospitalData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register-hospital`, hospitalData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Register as Donor
export const registerDonor = createAsyncThunk('auth/registerDonor', async (donorData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register-donor`, donorData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Register as Receiver
export const registerReceiver = createAsyncThunk('auth/registerReceiver', async (receiverData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register-receiver`, receiverData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // User info
    isLoading: false, // Loading state
    error: null, // Error message
    success: false, // Success state for feedback
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
        state.user = action.payload;
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Register as Hospital
      .addCase(registerHospital.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(registerHospital.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Register as Donor
      .addCase(registerDonor.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Register as Receiver
      .addCase(registerReceiver.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerReceiver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(registerReceiver.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
