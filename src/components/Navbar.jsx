import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens if stored
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>🏥 HealthCare</h2>
      <div className="nav-links">
        <Link to="/doctorlist">Doctors</Link>
        <Link to="/appointment">Appointments</Link>
        <Link to="/history">History</Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
