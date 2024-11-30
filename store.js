import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authSlice'; // Adjust the path to where your authSlice.js is located
import hospitalInfoReducer from './src/features/hospitalinfoSlice'
import heditReducer from './src/features/heditSlice';
import ratingReducer from "./src/features/ratingslice";
import userInfoReducer from './src/features/userInfoSlice';
import registrationReducer from './src/features/usereditSlice';


const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice reducer here
    hospitalInfo: hospitalInfoReducer,
    hedit: heditReducer,
    ratings: ratingReducer,
    userInfo: userInfoReducer,
    registration: registrationReducer,

  },
});

export default store;
