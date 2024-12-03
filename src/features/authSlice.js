import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://2112-103-207-87-227.ngrok-free.app/api/auth';

// Function to load data from localStorage
const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

// Async actions
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      UsernameOrEmail: credentials.UsernameOrEmail,
      password: credentials.password,
    });

    const { hospitalId, patientId } = response.data;
    const { userId, roleId, email, token, fullName } = response.data.data.response || {};

    // Save user data in localStorage
    const userData = { userId, roleId, email, token, fullName, hospitalId, patientId };
    localStorage.setItem('user', JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

export const register = createAsyncThunk('auth/register', async (registrationData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/signupWithEmail`, registrationData);

    const { token, email, fullName, userId, roleId, hospitalId, patientId } = response.data.response;

    // Save user data in localStorage
    const userData = { token, email, fullName, userId, roleId, hospitalId, patientId };
    localStorage.setItem('user', JSON.stringify(userData));

    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // Clear data from localStorage
    localStorage.removeItem('user');
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred during logout');
  }
});

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: loadUserFromLocalStorage(),  // Load user from localStorage if available
    isLoading: false,
    error: null,
    success: false,
    token: null,
    userId: null,
    roleId: null,
    hospitalId: null,
    patientId: null,
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

      // Clear from localStorage as well
      localStorage.removeItem('user');
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
          fullName: action.payload.fullName,
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
        state.user = {
          email: action.payload.email,
          fullName: action.payload.fullName,
        };
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.roleId = action.payload.roleId;
        state.hospitalId = action.payload.hospitalId;
        state.patientId = action.payload.patientId;
        state.success = true;
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
