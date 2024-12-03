import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Replace with your actual backend URL
const BACKEND_URL = "https://3018-2400-adc5-43c-4600-507e-c44-a623-bf6.ngrok-free.app/api/hospital";

// Update the thunk to accept hospitalId directly
export const fetchHospitalInfo = createAsyncThunk(
  "hospitalInfo/fetchHospitalInfo",
  async (hospitalId, thunkAPI) => {
    try {
      console.log(hospitalId);
      if (!hospitalId) {
        throw new Error("Hospital ID is required");
      }
      const response = await axios.get(`${BACKEND_URL}/get?hospitalId=${hospitalId}`);
      console.log("API Response:", response.data); // Log response for debugging
      return response.data;
    } catch (error) {
      console.error("Error fetching hospital info:", error); // Log error for debugging
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Failed to fetch hospital info"
      );
    }
  }
);

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const hospitalInfoSlice = createSlice({
  name: "hospitalInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHospitalInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHospitalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Ensure payload contains all the necessary fields
      })
      .addCase(fetchHospitalInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Selector to access hospital information state
export const selectHospitalInfo = (state) => state.hospitalInfo;

// Export the reducer
export default hospitalInfoSlice.reducer;
