import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Dummy data for testing
const dummyData = [
  { id: 1, hospital: "City Hospital", rating: 4.5, review: "Great service!" },
  { id: 2, hospital: "City Hospital", rating: 3.8, review: "Good experience overall." },
  { id: 3, hospital: "General Hospital", rating: 4.0, review: "Friendly staff, clean environment." },
  { id: 4, hospital: "City Hospital", rating: 5.0, review: "Excellent care and facilities!" },
  { id: 5, hospital: "General Hospital", rating: 3.0, review: "Could improve waiting times." },
];

// Async thunk to simulate fetching reviews from an API
export const fetchReviews = createAsyncThunk(
  "ratings/fetchReviews",
  async (hospitalName = null) => {
    // Simulate API delay and response
    return new Promise((resolve) => {
      setTimeout(() => {
        if (hospitalName) {
          resolve(dummyData.filter((review) => review.hospital === hospitalName)); // Filter by hospital
        } else {
          resolve(dummyData); // Return all reviews if no hospital is specified
        }
      }, 1000);
    });
  }
);

const ratingSlice = createSlice({
  name: "ratings",
  initialState: {
    reviews: [], // List of reviews fetched
    rating: null, // Overall rating (calculated)
    loading: false, // Loading state
    error: null, // Error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;

        // Calculate overall rating
        const ratings = action.payload.map((review) => review.rating);
        state.rating =
          ratings.reduce((acc, val) => acc + val, 0) / ratings.length || 0;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ratingSlice.reducer;
