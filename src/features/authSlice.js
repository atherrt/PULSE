import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { saveAuthData, clearAuthData } from './authdata'; // Import utility functions

const API_URL = 'https://3018-2400-adc5-43c-4600-507e-c44-a623-bf6.ngrok-free.app/api/auth';

// Login action
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      UsernameOrEmail: credentials.UsernameOrEmail,
      password: credentials.password,
    });

    console.log('Response data:', response.data); // Log response for debugging

    // Extract necessary data from the response
    const { hospitalId, patientId } = response.data.data;
    const { userId, roleId, email, token } = response.data.data.response || {};

    // Save authentication data to localStorage
    saveAuthData({ token, roleId, userId, hospitalId, patientId });

    
    return { userId, roleId, email, token, hospitalId, patientId };
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

// Register action
export const register = createAsyncThunk('auth/register', async (registrationData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/signupWithEmail`, registrationData);
    console.log('Response data:', response.data);

    const { token, email, fullName, userId, roleId, hospitalId, patientId } = response.data.response;

    // Save registration data to localStorage
    saveAuthData({ token, roleId, userId, hospitalId, patientId });

    return { token, email, fullName, userId, roleId, hospitalId, patientId };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

// Logout action
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // Clear all authentication data from localStorage
    clearAuthData();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred during logout');
  }
});

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    success: false,
    token: localStorage.getItem('token') || null, // Check localStorage for token
    userId: localStorage.getItem('userId') || null,
    role: localStorage.getItem('role') || null,
    roleId: localStorage.getItem('roleId') || null, // Ensure roleId is fetched from localStorage
    hospitalId: localStorage.getItem('hospitalId') || null,
    patientId: localStorage.getItem('patientId') || null,
  },
  reducers: {
    clearState: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.token = null;
      state.userId = null;
      state.roleId = null;
      state.hospitalId = null;
      state.patientId = null;
      clearAuthData(); // Clear localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.roleId = action.payload.roleId;
        state.hospitalId = action.payload.hospitalId;
        state.patientId = action.payload.patientId;
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.token = action.payload.token;
        state.user = {
          email: action.payload.email,
          fullName: action.payload.fullName,
        };
        state.userId = action.payload.userId;
        state.roleId = action.payload.roleId;
        state.hospitalId = action.payload.hospitalId;
        state.patientId = action.payload.patientId;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.userId = null;
        state.roleId = null;
        state.hospitalId = null;
        state.patientId = null;
        state.success = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
