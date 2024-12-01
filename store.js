import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authSlice'; // Adjust the path to where your authSlice.js is located
import hospitalInfoReducer from './src/features/hospitalinfoSlice'
import heditReducer from './src/features/heditSlice';
import ratingReducer from "./src/features/ratingslice";
import hospitalReducer from "./src/features/hospitalSlice";
import donorReducer from "./src/features/DonorSlice";
//above are the reducers of 

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice reducer here
    hospitalInfo: hospitalInfoReducer,
    hedit: heditReducer,
    ratings: ratingReducer,
    hospital: hospitalReducer,
    donor: donorReducer,

      
  },
});

export default store;
