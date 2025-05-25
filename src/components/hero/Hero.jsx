import React from 'react';
import './Hero.css';
import 'animate.css';
import { FaPlay } from 'react-icons/fa';
import RightImg from '../../assets/1111.png';

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h5 className="subhero animate__animated animate__fadeInUp animate__delay-1s">WAHARAKA HELA OSU</h5>
           <h2
  className="display-4 fw-h-100 animate__animated animate__fadeInUp animate__delay-1.5s"
  style={{ lineHeight: '1' }}
>
  Embrace the healing wisdom of{' '}
  <b style={{ fontSize: '1.5em' }}>Ancient Hela medicine</b>
</h2>
            <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
             Blending the Ancient Healing Traditions of Hela Osu with the Wellness Needs of the Modern World </p>
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
