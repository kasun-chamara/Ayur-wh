import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contactus-container">
      <h1 className="contactus-title">Contact Us</h1>
      <p className="contactus-desc">
        If you have any questions, suggestions, or want to reach out, please fill out the form below or contact us directly.
      </p>
      <div className="contactus-details">
        <p><strong>Phone:</strong> <a href="tel:+94761387620">+94 76 138 7620</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@waharaka.com">info@waharaka.com</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/94761387620" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
      </div>
    </div>
  );
}

export default ContactUs;