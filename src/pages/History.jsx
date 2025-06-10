import React from 'react';
import Navbar from '../components/Navbar';
import './History.css';

const history = [
  { doctor: 'Dr. A. Kumar', date: '2024-06-01', time: '10:00 AM' },
  { doctor: 'Dr. B. Sharma', date: '2024-05-20', time: '3:30 PM' },
  { doctor: 'Dr. Priya Mehta', date: '2024-04-15', time: '11:15 AM' },
];

const History = () => {
  return (
    <>
      <Navbar />
      <div className="history-container">
        <h2>📋 Appointment History</h2>
        {history.length === 0 ? (
          <p className="no-history">No previous appointments found.</p>
        ) : (
          <ul className="history-list">
            {history.map((item, index) => (
              <li key={index} className="history-card">
                <div className="doctor-name">{item.doctor}</div>
                <div className="date-time">{item.date} | {item.time}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default History;
