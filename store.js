import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authSlice'; // Adjust the path to where your authSlice.js is located

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice reducer here
  },
});

export default store;
