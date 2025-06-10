import React, { useState } from 'react';
import './Auth.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();

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

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.message || 'Login failed');
      } else {
        alert('Login successful');
        navigate('/doctorlist'); // ✅ Navigate to doctor list
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
          <h2>Welcome back</h2>
          <p className="form-subtitle">Please enter your details</p>

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

          {submitError && <p className="submit-error">{submitError}</p>}

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <p className="form-footer">
            <span className='dont'>Don’t have an account? </span>
            <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
