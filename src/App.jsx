import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DoctorList from './pages/DoctorList';
import Appointment from './pages/Appointment';
import History from './pages/History';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctorlist" element={<DoctorList/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </Router>
  );
}

export default App;
