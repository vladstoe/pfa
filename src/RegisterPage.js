import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    // Perform validation checks here
    if (formData.username.trim() === '') {
      validationErrors.username = 'Username is required';
    }

    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required';
    }

    if (formData.password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    if (formData.confirmPassword.trim() === '') {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    // If there are no validation errors, you can proceed with registration logic here
    // For this example, we are just logging the form data
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="username"
            className={`register-input ${errors.username ? 'error' : ''}`}
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}

          <input
            type="email"
            className={`register-input ${errors.email ? 'error' : ''}`}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <input
            type="password"
            className={`register-input ${errors.password ? 'error' : ''}`}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          <input
            type="password"
            className={`register-input ${errors.confirmPassword ? 'error' : ''}`}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
