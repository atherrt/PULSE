import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Adjust the path to where your authSlice.js is located

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth slice here
  },
});

export default store;
