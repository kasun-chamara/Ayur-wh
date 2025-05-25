import React from 'react';
import './FootereHeader.css';
import footerHeaderImg from '../../assets/footerheader-img.png';

function FootereHeader() {
  return (
    <div className="footer-header-bar">
      <div className="footer-header-content">
        <span className="footer-header-title ms-5">Start Your Wellness Journey Today!</span>
        <button className="footer-header-btn">Get Started</button>
      </div>
      <img src={footerHeaderImg} alt="Wellness" className="footer-header-img me-5" />
    </div>
  );
}

export default FootereHeader;