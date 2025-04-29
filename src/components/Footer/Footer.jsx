import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best Ayurvedic products and services to promote a healthy and balanced lifestyle.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@ayurveda.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Ayurvedic Lane, Wellness City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ayurveda. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
