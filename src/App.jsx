import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero_page/hero";
import Footer from "./components/footer/footer";
import Header from "./components/header/header.jsx";
import Login from "./components/login/login";
import SignUpPage from "./components/register/register";
// import RegisterOptions from "./components/register_as/registeras";
import HospitalRegistration from "./components/hospital-form/hform";
import DonorRegistration from "./components/DR-form/drform";
import UserHeader from "./userdashboard/components/header/userheader";
import AppLayout from "./layouts/al1";

import HospitalInfo from "./hospitaldashboard/components/hospitalhomepage";
import HospitalHeader from "./hospitaldashboard/components/hospitalheader";
import EditProfile from "./hospitaldashboard/components/heditprofile.jsx";

function App() {
  return (
   <>
   <HospitalHeader/>
   <HospitalInfo/>
   </>
    // <Router>
    //   <AppLayout>
    //     <Routes>
    //       <Route path="/" element={<Hero />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<SignUpPage />} />
    //       {/* <Route path="/register-options" element={<RegisterOptions />} /> */}
    //       <Route path="/hospital-registration" element={<HospitalRegistration />} />
    //       <Route path="/donor-registration" element={<DonorRegistration />} />
    //     </Routes>
    //   </AppLayout>
    // </Router>
  );
}

export default App;
