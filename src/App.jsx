import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero_page/hero";
import Footer from "./components/footer/footer";
import Header from "./components/header/header.jsx";
import Login from "./components/login/login";
import SignUpPage from "./components/register/register";
import HospitalRegistration from "./components/hospital-form/hform";
import DonorRegistration from "./components/DR-form/drform";
import UserHeader from "./userdashboard/components/userheader";
import AppLayout from "./layouts/al1";

import HospitalHeader from "./hospitaldashboard/components/hospitalheader";
import HospitalInfo from "./hospitaldashboard/components/hospitalhomepage";
import HospitalEditProfile from "./hospitaldashboard/components/heditprofile.jsx";
import ViewRating from "./hospitaldashboard/components/viewrating.jsx";
import Reviews from "./hospitaldashboard/components/viewreviews.jsx";

import UserInfoCard from "./userdashboard/components/userhomepage.jsx";
import RegistrationForm from "./userdashboard/components/usereditprofile.jsx";
import DonationHistory from "./userdashboard/components/udonationshistory.jsx";
import UserHeader from "./userdashboard/components/header/userheader";
import AppLayout from "./layouts/al1"; // Assuming AppLayout is your layout component

function App() {
  return (
   
    <>
    <UserHeader/>
    <DonationHistory/>
    </>
    // <Router>
    //    <AppLayout>
    //      <Routes>
    //        <Route path="/" element={<Hero />} />
    //        <Route path="/login" element={<Login />} />
    //        <Route path="/signup" element={<SignUpPage />} />
    //        {/* <Route path="/register-options" element={<RegisterOptions />} /> */}
    //        <Route path="/hospital-registration" element={<HospitalRegistration />} />
    //        <Route path="/donor-registration" element={<DonorRegistration />} />
    //      </Routes>
    //    </AppLayout>
    // </Router>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AppLayout><Hero /></AppLayout>} />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/signup" element={<AppLayout><SignUpPage /></AppLayout>} />
        <Route path="/hospital-registration" element={<HospitalRegistration />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />

        {/* Hospital Dashboard Routes */}
        <Route path="/hospital-dashboard" element={<HospitalHeader />}>
          <Route index element={<HospitalInfo />} />
          <Route path="edit-profile" element={<HospitalEditProfile />} />
          <Route path="view-rating" element={<ViewRating />} />
          <Route path="view-reviews" element={<Reviews />} />
        </Route>

        {/* User Dashboard Routes */}
        <Route path="/user-dashboard" element={<UserHeader />}>
          {/* Add routes for the user dashboard here */}
          {/* Example: */}
          {/* <Route path="profile" element={<UserProfile />} /> */}
        </Route>

        {/* Protected Routes Layout */}
      
      </Routes>
    </Router>
  );
}

export default App;
