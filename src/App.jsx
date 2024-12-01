import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero_page/hero";
import Login from "./components/login/login";
import SignUpPage from "./components/register/register";
import HospitalRegistration from "./components/hospital-form/hform";
import DonorRegistration from "./components/DR-form/drform";
import AppLayout from "./layouts/al1";
import HospitalLayout from "./layouts/HospitalLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx"; // Import ProtectedRoute

import UserHeader from "./userdashboard/components/userheader.jsx";
import UserInfoCard from "./userdashboard/components/userhomepage.jsx";
import HospitalInfo from "./hospitaldashboard/components/hospitalhomepage";
import HospitalEditProfile from "./hospitaldashboard/components/heditprofile.jsx";
import ViewRating from "./hospitaldashboard/components/viewrating.jsx";
import Reviews from "./hospitaldashboard/components/viewreviews.jsx";

import DonationHistory from "./userdashboard/components/udonationshistory.jsx";
import HospitalCards from "./userdashboard/components/viewpulsehospitals.jsx";
import GiveRating from "./userdashboard/components/giverating.jsx";
import ForgotPassword from "./components/Forgot-Password/ForgotPassword.jsx";
import ResetPassword from "./components/Reset-Password/resetPassword.jsx";

function App() {
  return (
       
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AppLayout><Hero /></AppLayout>} />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Reset-password" element={<AppLayout><ResetPassword /></AppLayout>} />
        <Route path="/signup" element={<AppLayout><SignUpPage /></AppLayout>} />
        <Route path="/hospital-registration" element={<HospitalRegistration />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />

        {/* Protected Routes */}
        {/* Hospital Routes */}
        <Route
          path="/hospital-dashboard"
          element={
             <ProtectedRoute requiredRole={1}>
              <HospitalLayout><HospitalInfo /></HospitalLayout>
           </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute requiredRole={1}>
              <HospitalLayout><HospitalEditProfile /></HospitalLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-rating"
          element={
            <ProtectedRoute requiredRole={1}>
              <HospitalLayout><ViewRating /></HospitalLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-reviews"
          element={
            <ProtectedRoute requiredRole={1}>
              <HospitalLayout><Reviews /></HospitalLayout>
            </ProtectedRoute>
          }
        />

        {/* Donor Routes */}
        <Route
          path="/donor-dashboard"
          element={
          //  <ProtectedRoute requiredRole={2}>
              <DonationHistory />
            // </ProtectedRoute>
          }
        />
            <Route
          path="/Give-rating"
          element={
            <ProtectedRoute requiredRole={2}>
              <GiveRating />
            </ProtectedRoute>
          }
        />
         <Route
          path="/Pulse-Verified-Hospitals"
          element={
            <ProtectedRoute requiredRole={2}>
              <HospitalCards />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
