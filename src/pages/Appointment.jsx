import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Appointment.css';

const Appointment = () => {
  const [form, setForm] = useState({
    doctor: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${form.doctor} on ${form.date} at ${form.time}`);
    setForm({ doctor: '', date: '', time: '' });
  };

  return (
    <>
      <Navbar />
      <div className="appointment-container">
        <h3>Book an Appointment</h3>
        <form onSubmit={handleSubmit}>
          <label>Doctor Name</label>
          <input name="doctor" value={form.doctor} onChange={handleChange} required />

          <label>Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />

          <label>Time</label>
          <input type="time" name="time" value={form.time} onChange={handleChange} required />

          <button type="submit">Book Now</button>
        </form>
      </div>
    </>
  );
};

export default Appointment;
