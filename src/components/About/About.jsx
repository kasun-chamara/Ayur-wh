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
          Hela Wedakama, Sri Lanka’s indigenous healing system, is a 3,000-year-old tradition rooted in nature, wisdom, and compassion. From ancient royal physicians to the world’s first hospitals in Mihintale, this heritage reflects a deep legacy of care. </p>
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
              <p className='me-4 mSe-lg-0"'> To revive, preserve, and promote Sri Lanka’s rich legacy of Hela Wedakama as a global model of natural, holistic healing rooted in ancient wisdom.</p>
            </div>
          </div>
          <div className="info-block">
            <FaBullseye className="info-icon" />
            <div>
              <h5>Our Mission</h5>
              <p className='me-4 me-lg-0"'> To safeguard and transmit traditional healing practices through education, research, and community service.</p>
            </div>
          </div>
          <div className="info-block">
            <FaHeart className="info-icon" />
            <div>
              <h5>Our Motto</h5>
              <p className='me-4 me-lg-0"'> Healing through heritage – nature, knowledge, and care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
