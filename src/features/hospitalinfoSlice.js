import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "JOHN DOE",
  joinedSince: "25 Years",
  licenseNumber: "3520278562465",
  contactInfo: "john@gmail.com",
  beds: 10,
  wards: 10,
  emergencyWard: "Yes",
  overallFeedback: 152,
  hospitalTimings: "9:00 AM - 5:00 PM",
  phone: "03054628733",
};

const hospitalInfoSlice = createSlice({
  name: "hospitalInfo",
  initialState,
  reducers: {},
});

export const selectHospitalInfo = (state) => state.hospitalInfo;

export default hospitalInfoSlice.reducer;
