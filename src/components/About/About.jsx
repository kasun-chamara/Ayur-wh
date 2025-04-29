import React from 'react';
import './About.css'; // Import the About styles
import aboutImage from '../../assets/Ab-bg-rgt.png'; // Import the image

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">The combination of nature and science.</h2>
          <p className="about-description">
            Laoreet consequat erat orci metus montes potenti porta ultrices sagittis. Duis libero maecenas sodales commodo hendrerit. Litora quisque molestie ultricies eros parturient pretium volutpat.
          </p>
          <ul className="about-points">
            <li>Professional Therapist</li>
            <li>Organic Herbal</li>
            <li>Comprehensive Services</li>
            <li>24/7 Premium Support</li>
          </ul>
          <button className="about-button">Read More</button>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default About;