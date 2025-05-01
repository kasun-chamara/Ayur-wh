import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-light shadow-sm navbar ${scrolling ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand fw-bold ms-3" href="#home">
          LOGO
        </a>
        <button
          className="navbar-toggler me-3 m-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item px-2">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
          <div className="d-flex justify-content-center d-lg-block mt-3 mt-lg-0 mb-3 mb-lg-0">
             <button className="btn btn-success rounded-pill px-4">Contact</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
