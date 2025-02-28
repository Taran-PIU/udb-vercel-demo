import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LoginPages/LandingPage';
import StudentLogin from './LoginPages/StudentLogin';
import HomePage from './HomePage/HomePage';
import RbacRegister from './RegisterPages/rbacRegistration.jsx';
import StudentProfilePage from './ProfilePages/studentProfilePage';
import ForgotPassword from './forgotPass/forgotPassword.jsx';
import ResetPassword from './forgotPass/resetPassword.jsx';
import HowItWorks from './HomePage/howitworks.js';
import PricingPlans from './HomePage/PricingPlans.js';
import Contactus from './HomePage/contactUs.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/register" element={<RbacRegister />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/reset-password/" element={<ResetPassword />} />
          {/* Student Routes */}
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/profile/student" element={<StudentProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
