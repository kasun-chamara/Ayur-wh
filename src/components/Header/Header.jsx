import React from 'react';
import './Header.css'; // Add styles for the header

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* <img src="/path-to-your-logo/logo.png" alt="Logo" /> */}
        <h2>LOGO</h2>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <button className="contact-button">Contact</button>
    </header>
  );
}

export default Header;