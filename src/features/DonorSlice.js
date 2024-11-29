// src/features/donorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle donor registration API call
export const registerDonor = createAsyncThunk(
  'donor/register',
  async (donorData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://7d9c-2400-adc5-43c-4600-c40f-b5c1-81d1-ef1a.ngrok-free.app/api/auth/registerAsDonor',
        donorData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const donorSlice = createSlice({
  name: 'donor',
  initialState: {
    donor: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.donor = action.payload; // Store the response data
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message
      });
  },
});

export default donorSlice.reducer;
