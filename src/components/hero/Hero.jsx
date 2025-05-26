import React, { useState, useEffect } from 'react';
import './Hero.css';
import 'animate.css';
import { FaPlay } from 'react-icons/fa';
import RightImg from '../../assets/1111.png';
import IntroVideo from '../../assets/intro.mp4';

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  // Close modal on scroll
  useEffect(() => {
    if (!showVideo) return;
    const handleScroll = () => setShowVideo(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showVideo]);

  // Close modal on ESC key
  useEffect(() => {
    if (!showVideo) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showVideo]);

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
              <b style={{ fontSize: '1.5em' }}>Ancient Hela medicine...!</b>
            </h2>
            <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              Blending the Ancient Healing Traditions of Hela Osu with the Wellness Needs of the Modern World
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 animate__animated animate__fadeInUp animate__delay-2s">
              <button className="btn custom-green px-4" onClick={openVideo}>Discover More</button>
              <button className="btn btn-outline-light btn-lg rounded-circle video-btn pulse-animation" onClick={openVideo}>
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

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideo}>&times;</button>
            <video
              src={IntroVideo}
              width="1000"
              height="600"
              controls
              autoPlay
              style={{ borderRadius: '16px', background: '#000' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;