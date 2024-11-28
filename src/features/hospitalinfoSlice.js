import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Replace with your actual backend URL
const BACKEND_URL = "https://674760f338c8741641d68647.mockapi.io/api/v1/hospital-info/Info";

// Define an async thunk to fetch hospital data
export const fetchHospitalInfo = createAsyncThunk(
  "hospitalInfo/fetchHospitalInfo",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BACKEND_URL);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch hospital info");
    }
  }
);

const initialState = {
  data: {
    name: "",
    joinedsince: "",
    licenseNumber: "",
    contactInfo: "",
    // beds: 0,
    // wards: 0,
    // emergencyWard: "",
    // overallFeedback: 0,
    // hospitalTimings: "",
    // phone: "",
  },
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
