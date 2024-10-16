import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      // Add your form submission logic here
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-banner">
        <img
          src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?uid=R140524909&ga=GA1.1.1745904934.1728549633&semt=ais_hybrid" // Use your preferred image
          alt="Healthy Lyf Franchise"
          className="contact-banner-image"
        />
        <div className="quote">
          <h1>Join the "Healthy Lyf" Franchise!</h1>
          <p>"Empowering a healthy lifestyle, one franchise at a time."</p>
        </div>
      </div>
      <div className="contact-form-container">
        <h2>Contact Us for Franchise Inquiries</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
