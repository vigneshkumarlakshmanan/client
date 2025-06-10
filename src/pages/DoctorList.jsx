import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './DoctorList.css';

const doctors = [
  { name: 'Dr. A. Kumar', specialty: 'Cardiologist' },
  { name: 'Dr. B. Sharma', specialty: 'Dermatologist' },
  { name: 'Dr. C. Mehta', specialty: 'Neurologist' },
];

const DoctorList = () => {
  const [showToast, setShowToast] = useState(false);

  const handleBookAppointment = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000); // Toast disappears after 2 seconds
  };

  return (
    <>
      <Navbar />
      <div className="doctor-container">
        <h3>Available Doctors</h3>
        <ul>
          {doctors.map((doc, index) => (
            <li key={index}>
              <h4>{doc.name}</h4>
              <p>{doc.specialty}</p>
              <button onClick={handleBookAppointment}>Book Appointment</button>
            </li>
          ))}
        </ul>
      </div>

      {showToast && <div className="toast">Appointment Booked ✅</div>}
    </>
  );
};

export default DoctorList;
