import React, { useEffect, useState } from 'react';
import './About.css';
import aboutImage from '../../assets/AboutUs.svg';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleReadMore = () => {
    setShowIframe(true);
  };

  const handleClose = () => {
    setShowIframe(false);
  };

  return (
    <>
      <section className={`container about-section py-5${showIframe ? ' about-blur' : ''}`}>
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-lg-4 about-left ms-3 ms-lg-0" data-aos="fade-right">
            <h2 className="about-title">About Us</h2>
            <h3 className="about-subtitle">The Story Behind Our Passion <br />for Hela Wedakama</h3>
            <hr className='me-4 me-lg-0 ' />
            <p className="about-description me-4 me-lg-0">
              Hela Wedakama is more than just medicine to us it is a way of life that connects us to our past. This healing method started thousands of years ago in Sri Lanka and was used by great healers and even kings. It is based on natural herbs and caring for both the body and the mind. Our passion grew stronger after seeing how these treatments helped people during tough times like the COVID-19 pandemic. We believe it is our duty to protect and share this ancient knowledge with the world
            </p>
            <button className="about-learn-more mb-2" onClick={handleReadMore}>
              Read More
            </button>
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
      {showIframe && (
        <div className="about-modal-overlay">
          <div className="about-modal-content">
            <button className="about-modal-close-btn" onClick={handleClose}>×</button>
            <iframe
              allowFullScreen
              scrolling="no"
              className="about-modal-iframe"
              src="https://heyzine.com/flip-book/8f418b7b1e.html"
              title="about-flipbook"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default About;