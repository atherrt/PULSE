import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Replace with your actual backend URL
const BACKEND_URL = "https://9603-2400-adc5-43c-4600-c19e-e9c8-59bd-d927.ngrok-free.app/api/hospital/get";

export const fetchHospitalInfo = createAsyncThunk(
  "hospitalInfo/fetchHospitalInfo",
  async (hospitalId, thunkAPI) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/${hospitalId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch hospital info");
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
