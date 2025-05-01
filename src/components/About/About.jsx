import React from 'react';
import './About.css';
import aboutImage from '../../assets/AboutUs.svg';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <section className="container about-section py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-12 col-lg-4 about-left animate-left ms-3 ms-lg-0 ">
          <h2 className="about-title">About Us</h2>
          <h3 className="about-subtitle">The Story Behind Our Passion for Ayurvedic Healing</h3>
          <hr />
          <p className="about-description">
            Auctor ac nibh ligula consectetur ut pellentesque montes parturient. Gravida letius fusce iaculis amet
            aliquet natoque erat. Arcu fusce praesent himenaeos fames placerat eu purus id libero congue malesuada.
          </p>
          <button className="about-learn-more mb-5 mb-lg-0">Learn More</button>
        </div>

        {/* Middle Image */}
        <div className="col-12 col-lg-4 about-center animate-bottom d-flex justify-content-center">
          <img src={aboutImage} alt="About Us" className="about-center-image" />
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-4 about-right animate-right ms-3 ms-lg-0 mt-5 mt-lg-0">
          <div className="info-block">
            <FaEye className="info-icon" />
            <div>
              <h5>Our Vision</h5>
              <p>Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </div>
          <div className="info-block">
            <FaBullseye className="info-icon" />
            <div>
              <h5>Our Mission</h5>
              <p>Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </div>
          <div className="info-block">
            <FaHeart className="info-icon" />
            <div>
              <h5>Our Motto</h5>
              <p>Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
