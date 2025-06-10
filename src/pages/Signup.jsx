import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSubmitError('');
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = {};
  if (!form.email) validationErrors.email = 'Email is required';
  if (!form.password) validationErrors.password = 'Password is required';
  if (form.password !== form.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

  if (Object.keys(validationErrors).length) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);
  try {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email, password: form.password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setSubmitError(data.message || 'Signup failed');
    } else {
      alert('Signup successful');
      // Optionally redirect to login
    }
  } catch (err) {
    setSubmitError('Something went wrong');
  } finally {
    setLoading(false);
  }
};

   

  return (
    <div className="auth-container">
      <div className="auth-box">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Create an account</h2>
          <p className="form-subtitle">Please fill your details</p>

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <small>{errors.email}</small>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <small>{errors.password}</small>}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

          {submitError && <p className="submit-error">{submitError}</p>}

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Signing up...' : 'Sign up'}
          </button>

          <p className="form-footer">
            <span className='dont'>Already have an account?</span> <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
