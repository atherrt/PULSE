// src/features/hospitalSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle hospital registration API call
export const registerHospital = createAsyncThunk(
  'hospital/register',
  async (hospitalData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://b843-2400-adc5-43c-4600-b1b1-7f8d-bfeb-7e0e.ngrok-free.app/api/auth/registerAsHospital',
        hospitalData
      );
      console.log(response.data);
      return response.data; // Return the full response data
    } catch (error) {
      return rejectWithValue(error.response.data); // If there's an error, return the error message
    }
  }
);

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState: {
    hospital: null,
    loading: false,
    error: null,
    role: 1,  // Set default role as '1' for hospital
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerHospital.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerHospital.fulfilled, (state, action) => {
        state.loading = false;
        state.hospital = action.payload;  // Store the response data
        // Ensure the role is set as '1' (Hospital)
        state.role = 1;  
      })
      .addCase(registerHospital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;  // Store the error message
      });
  },
});

export default hospitalSlice.reducer;
