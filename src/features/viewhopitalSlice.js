import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy data to simulate API response
const dummyData = [
  {
    id: 1,
    name: 'JINNAH HOSPITAL',
    address: 'ABC Hospital Building, XYZ Road, Place, District Pincode',
    status: 'SUCCESS',
  },
  {
    id: 2,
    name: 'JINNAH HOSPITAL',
    address: 'ABC Hospital Building, XYZ Road, Place, District Pincode',
    status: 'SUCCESS',
  },
];

// Async thunk to simulate API call
export const fetchViewHospital = createAsyncThunk('viewhospital/fetchViewHospital', async () => {
  // Simulating API call with dummy data
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyData), 1000);
  });
});

const viewHospitalSlice = createSlice({
  name: 'viewhospital',
  initialState: {
    hospitals: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchViewHospital.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchViewHospital.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals = action.payload;
      })
      .addCase(fetchViewHospital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default viewHospitalSlice.reducer;
