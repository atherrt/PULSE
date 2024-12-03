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

    console.log("Response data:", response.data); // Log the full response to inspect the structure

    // Destructure the necessary data from the response
    const { userId, roleId, email, token } = response.data.response || {}; // Access data from 'data' field in response

    // If token is present, save it in localStorage
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('roleId', roleId);
      localStorage.setItem('userId', userId);
    }

    return { userId, roleId, email, token }; // Return the required data
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

export const register = createAsyncThunk('auth/register', async (registrationData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/signupWithEmail`, registrationData);
    console.log("Response data:", response.data);

    const { token, email, fullName, userId, roleId, hospitalId, patientId } = response.data.response;

    if (hospitalId) {
      localStorage.setItem('hospitalId', hospitalId); // Save hospitalId to localStorage
    }
    if (patientId) {
      localStorage.setItem('patientId', patientId); // Save patientId to localStorage
    }
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('roleId', roleId);
      localStorage.setItem('userId', userId);
    }

    return { token, email, fullName, userId, roleId, hospitalId, patientId }; // Include hospitalId and patientId
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');
    localStorage.removeItem('userId');
    localStorage.removeItem('hospitalId'); // Clear hospitalId on logout
    localStorage.removeItem('patientId'); // Clear patientId on logout
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
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    role: localStorage.getItem('role') || null,
    roleId: localStorage.getItem('roleId') || null,
    hospitalId: localStorage.getItem('hospitalId') || null, // Persist hospitalId
    patientId: localStorage.getItem('patientId') || null, // Persist patientId
  },
  reducers: {
    clearState: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.token = null;
      state.userId = null;
      state.role = null;
      state.roleId = null;
      state.hospitalId = null; // Clear hospitalId
      state.patientId = null; // Clear patientId
      localStorage.clear(); // Clear all localStorage items
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
        state.role = action.payload.role;
        state.roleId = action.payload.roleId;
        state.hospitalId = action.payload.hospitalId; // Save hospitalId
        state.patientId = action.payload.patientId; // Save patientId
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
        state.role = action.payload.role;
        state.roleId = action.payload.roleId;
        state.hospitalId = action.payload.hospitalId; // Save hospitalId
        state.patientId = action.payload.patientId; // Save patientId
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
        state.role = null;
        state.roleId = null;
        state.hospitalId = null; // Clear hospitalId
        state.patientId = null; // Clear patientId
        state.success = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
