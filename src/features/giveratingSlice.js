import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy data to simulate API responses
const dummyHospitalData = [
  { id: 1, name: 'Hospital A' },
  { id: 2, name: 'Hospital B' },
  { id: 3, name: 'Hospital C' },
];

// Fetch hospitals that the user has donated to
export const fetchUserHospitals = createAsyncThunk(
  'giverating/fetchUserHospitals',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(dummyHospitalData), 1000);
    });
  }
);

// Submit rating and review to the backend
export const submitHospitalRating = createAsyncThunk(
  'giverating/submitHospitalRating',
  async (ratingData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 'success', data: ratingData }), 1000);
    });
  }
);

const giveratingSlice = createSlice({
  name: 'giverating',
  initialState: {
    hospitals: [],
    loading: false,
    error: null,
    submissionStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchUserHospitals
      .addCase(fetchUserHospitals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserHospitals.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals = action.payload;
      })
      .addCase(fetchUserHospitals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle submitHospitalRating
      .addCase(submitHospitalRating.pending, (state) => {
        state.submissionStatus = 'loading';
      })
      .addCase(submitHospitalRating.fulfilled, (state, action) => {
        state.submissionStatus = 'success';
      })
      .addCase(submitHospitalRating.rejected, (state, action) => {
        state.submissionStatus = 'error';
      });
  },
});

export default giveratingSlice.reducer;
