import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy API call simulation
export const fetchRequests = createAsyncThunk('requests/fetchRequests', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Ather Tahir",
          bloodGroup: "B+",
          type: "Donation",
          dateOfDonation: "12-12-24",
          timeOfDonation: "11:30",
        },
        {
          name: "Osamah Ashraf",
          bloodGroup: "B+",
          type: "Donation",
          dateOfDonation: "12-12-24",
          timeOfDonation: "11:30",
        },
      ]);
    }, 1000); // Simulating API delay
  });
});

const fetchRequestsSlice = createSlice({
  name: 'requests',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchRequestsSlice.reducer;
