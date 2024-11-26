import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authSlice'; // Adjust the path to where your authSlice.js is located
import hospitalInfoReducer from './src/features/hospitalinfoSlice'
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice reducer here
    hospitalInfo: hospitalInfoReducer,
      
  },
});

export default store;
