import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulating an API call to fetch blood inventory data
export const fetchBloodInventory = createAsyncThunk(
  'bloodInventory/fetchBloodInventory',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { group: "A+", bottles: 25 },
          { group: "A-", bottles: 12 },
          { group: "B+", bottles: 20 },
          { group: "B-", bottles: 10 },
          { group: "O+", bottles: 30 },
          { group: "O-", bottles: 15 },
          { group: "AB+", bottles: 8 },
          { group: "AB-", bottles: 5 },
        ]);
      }, 1000); // Simulating API delay
    });
  }
);

const bloodInventorySlice = createSlice({
  name: 'bloodInventory',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBloodInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBloodInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBloodInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bloodInventorySlice.reducer;
