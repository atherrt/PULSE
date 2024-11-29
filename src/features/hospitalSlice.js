// src/features/hospitalSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle hospital registration API call
export const registerHospital = createAsyncThunk(
  'hospital/register',
  async (hospitalData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://7d9c-2400-adc5-43c-4600-c40f-b5c1-81d1-ef1a.ngrok-free.app/api/auth/registerAsHospital',
        hospitalData
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState: {
    hospital: null,
    loading: false,
    error: null,
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
      })
      .addCase(registerHospital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;  // Store the error message
      });
  },
});

export default hospitalSlice.reducer;
