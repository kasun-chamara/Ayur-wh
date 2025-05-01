import React from 'react';
import './Hero.css';
import 'animate.css';
import { FaPlay } from 'react-icons/fa';
import RightImg from '../../assets/HeroRight.png';

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h3 className="subhero animate__animated animate__fadeInUp animate__delay-1s">Welcome to ABC</h3>
            <h1 className="display-4 fw-h-100 animate__animated animate__fadeInUp animate__delay-1.5s">
              Natural care for natural beauty.
            </h1>
            <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              Experience Holistic Wellness with Santhika: Embrace the Power of Ayurveda for a Balanced Life.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 animate__animated animate__fadeInUp animate__delay-2s">
              <button className="btn custom-green px-4">Get Started</button>
              <button className="btn btn-outline-light btn-lg rounded-circle video-btn pulse-animation">
                <FaPlay />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <div className="hero-img-wrapper d-flex align-items-center animate__animated animate__zoomIn animate__delay-2s">
              <img src={RightImg} alt="Hero Illustration" className="img-fluid hero-right-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
