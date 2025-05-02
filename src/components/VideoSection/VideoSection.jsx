import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../../assets/vdobg.png';
import './VideoSection.css';

const VideoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="video-section d-flex flex-column justify-content-center text-white mt-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <div className="container text-center mb-4" data-aos="fade-in" data-aos-delay="500">
        <div className="play-button mb-4">
          <i className="bi bi-play-circle-fill"></i>
        </div>
        <h1 className="display-4">Welcome to <br></br>Our Ayurveda Experience</h1>
        <p className="lead">Discover healing through ancient wisdom.</p>
      </div>

      {/* Stats Row */}
      <div className="stats-bg d-flex justify-content-center py-4" data-aos="fade-in" data-aos-delay="1000">
        <div className="container">
          <div className="row justify-content-center text-center text-white">
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-box p-3">
                <h2 className="fw-bold display-4 statusnum">91</h2>
                <p className="mb-0">Projects Done</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-box p-3">
                <h2 className="fw-bold display-4 statusnum">84K+</h2>
                <p className="mb-0">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-box p-3">
                <h2 className="fw-bold display-4 statusnum">42+</h2>
                <p className="mb-0">Company Support</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-box p-3">
                <h2 className="fw-bold display-4 statusnum">4.7</h2>
                <p className="mb-0">Client Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
