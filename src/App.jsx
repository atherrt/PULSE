import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero_page/hero";
import Login from "./components/login/login";
import SignUpPage from "./components/register/register";
import HospitalRegistration from "./components/hospital-form/hform";
import DonorRegistration from "./components/DR-form/drform";
import AppLayout from "./layouts/al1";
import UserHeader from "./userdashboard/components/userheader.jsx";
import UserInfoCard from "./userdashboard/components/userhomepage.jsx";
import HospitalInfo from "./hospitaldashboard/components/hospitalhomepage";
import HospitalEditProfile from "./hospitaldashboard/components/heditprofile.jsx";
import ViewRating from "./hospitaldashboard/components/viewrating.jsx";
import Reviews from "./hospitaldashboard/components/viewreviews.jsx";

import DonationHistory from "./userdashboard/components/udonationshistory.jsx";
 
import HospitalLayout from "./layouts/HospitalLayout.jsx";

function App() {
  return (
   
    
 
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AppLayout><Hero /></AppLayout>} />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/signup" element={<AppLayout><SignUpPage /></AppLayout>} />
        <Route path="/hospital-registration" element={<HospitalRegistration />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />

      
          <Route path="/hospital-dashboard" element={<HospitalLayout><HospitalInfo /></HospitalLayout>} />
          <Route path="/edit-profile" element={<HospitalLayout><HospitalEditProfile /></HospitalLayout>} />
          <Route path="/view-rating" element={<HospitalLayout><ViewRating /></HospitalLayout>} />
          <Route path="/view-reviews" element={<HospitalLayout><Reviews /></HospitalLayout>} />
     
          <Route path="/donor-dashboard" element={<DonationHistory/>} />
        
   

       
      
      </Routes>
    </Router>
  );
}

export default App;
