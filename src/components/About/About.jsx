import React, { useEffect } from 'react';
import './About.css';
import aboutImage from '../../assets/AboutUs.svg';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // `once: true` means animate only once
  }, []);

  return (
    <section className="container about-section py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-12 col-lg-4 about-left ms-3 ms-lg-0" data-aos="fade-right">
          <h2 className="about-title">About Us</h2>
          <h3 className="about-subtitle">The Story Behind Our Passion <br></br>for Ayurvedic Healing</h3>
          <hr className='me-4 me-lg-0 ' />
          <p className="about-description me-4 me-lg-0">
            Auctor ac nibh ligula consectetur ut pellentesque montes parturient. Gravida letius fusce iaculis amet
            aliquet natoque erat. Arcu fusce praesent himenaeos fames placerat eu purus id libero congue malesuada.
          </p>
          <button className="about-learn-more mb-5 mb-lg-0">Learn More</button>
        </div>

        {/* Middle Image */}
        <div className="col-12 col-lg-4 about-center d-flex justify-content-center" data-aos="fade-up">
          <img src={aboutImage} alt="About Us" className="about-center-image" />
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-4 about-right ms-3 ms-lg-0 mt-5 mt-lg-0" data-aos="fade-left">
          <div className="info-block">
            <FaEye className="info-icon" />
            <div>
              <h5>Our Vision</h5>
              <p className='me-4 me-lg-0"'> Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </div>
          <div className="info-block">
            <FaBullseye className="info-icon" />
            <div>
              <h5>Our Mission</h5>
              <p className='me-4 me-lg-0"'> Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </div>
          <div className="info-block">
            <FaHeart className="info-icon" />
            <div>
              <h5>Our Motto</h5>
              <p className='me-4 me-lg-0"'> Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
