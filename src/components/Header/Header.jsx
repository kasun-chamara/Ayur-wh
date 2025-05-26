import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logoImg from '../../assets/WAHARAKA LOGO.png';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-light  navbar ${scrolling ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand fw-bold ms-3" to="/">
          <img src={logoImg} alt="Logo" className="header-logo-img" />
        </Link>
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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item px-2">
  <Link className="nav-link" to="/contact">Contact Us</Link>
</li>
          </ul>
          <div className="d-flex justify-content-center d-lg-block mt-3 mt-lg-0 mb-3 mb-lg-0">
             <a href="https://wa.me/94761387620" target="_blank">
  <button className="btn btn-success px-4">Book Now</button>
</a>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;