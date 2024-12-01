import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://b843-2400-adc5-43c-4600-b1b1-7f8d-bfeb-7e0e.ngrok-free.app/api/auth';

// Login action
// Login action
// Login action
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
      localStorage.setItem('roleId', roleId); // Save roleId to localStorage
    }

    return { userId, roleId, email, token }; // Return the required data
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});




// Register action
export const register = createAsyncThunk('auth/register', async (registrationData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/signupWithEmail`, registrationData);
    console.log("Response data:", response.data);

    const { token, email, fullName, userId, roleId } = response.data.response; // Access response from data
    if (token) {
      localStorage.setItem('token', token); // Save token to localStorage
      localStorage.setItem('roleId', roleId); // Save roleId to localStorage
    }

    return { token, email, fullName, userId, roleId }; // Include roleId
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
  }
});

// Logout action
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    localStorage.removeItem('token'); // Clear token on logout
    localStorage.removeItem('roleId'); // Clear roleId on logout
    localStorage.removeItem('userId'); // Clear userId on logout
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred during logout');
  }
});

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // Stores user info
    isLoading: false, // Tracks loading state
    error: null, // Stores error messages
    success: false, // Tracks success state
    token: localStorage.getItem('token') || null, // Persist token
    userId: localStorage.getItem('userId') || null, // Persist userId
    role: localStorage.getItem('role') || null, // Persist role
    roleId: localStorage.getItem('roleId') || null, // Persist roleId
  },
  reducers: {
    clearState: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.token = null;
      state.userId = null; // Clear userId
      state.role = null; // Clear role
      state.roleId = null; // Clear roleId
      localStorage.removeItem('token'); // Clear token
      localStorage.removeItem('role'); // Clear role
      localStorage.removeItem('roleId'); // Clear roleId
      localStorage.removeItem('userId'); // Clear userId
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
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
        }; // Save user info
        state.token = action.payload.token; // Save JWT token
        state.userId = action.payload.userId; // Save userId
        state.role = action.payload.role; // Save role
        state.roleId = action.payload.roleId; // Save roleId
        localStorage.setItem('token', action.payload.token); // Save token
        localStorage.setItem('role', action.payload.role); // Save role
        localStorage.setItem('roleId', action.payload.roleId); // Save roleId
        localStorage.setItem('userId', action.payload.userId); // Save userId
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Register cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true; // Registration successful
        state.token = action.payload.token; // Save token
        state.user = {
          email: action.payload.email,
          fullName: action.payload.fullName,
        }; // Save user info
        state.userId = action.payload.userId; // Save userId
        state.role = action.payload.role; // Save role
        state.roleId = action.payload.roleId; // Save roleId
        localStorage.setItem('token', action.payload.token); // Save token
        localStorage.setItem('role', action.payload.role); // Save role
        localStorage.setItem('roleId', action.payload.roleId); // Save roleId
        localStorage.setItem('userId', action.payload.userId); // Save userId
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Logout cases
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.userId = null; // Clear userId
        state.role = null; // Clear role
        state.roleId = null; // Clear roleId
        state.success = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
