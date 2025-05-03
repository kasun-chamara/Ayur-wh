import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Features.css';
import { FaPlay, FaLeaf, FaSpa, FaHeartbeat } from 'react-icons/fa';

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="features-section">
      <div className="container text-center py-5">
        {/* Heading, description, and play button animation from top */}
        <div data-aos="fade-down">
          <h1 className="features-heading mb-3">
            Join our growing <br></br> community of 20,000+ Ayurveda enthusiasts!
          </h1>
          <p className="features-description mb-4">
            Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales.
          </p>
          <div className="features-buttons mb-5 d-flex justify-content-center">
            <div className="video-button">
              <FaPlay className="video-icon" />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default Features;
