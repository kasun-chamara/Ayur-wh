import React from 'react';
import './Features.css'; // Import the Features styles
import { FaPlay, FaLeaf, FaSpa, FaHeartbeat } from 'react-icons/fa'; // Import the icons

function Features() {
  return (
    <section className="features-section">
      <div className="features-content">
        <h2 className="features-heading">Join our growing community of 20,000+ Ayurveda enthusiasts!</h2>
        <p className="features-description">
          Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales.
        </p>

        <div className="features-buttons">
          <div className="video-button">
            <FaPlay className="video-icon" />
          </div>
        </div>
        <div className="features-cards">
          <div className="card">
            <FaLeaf className="card-icon" />
            <h3 className="card-title">Holistic Health</h3>
            <p className="card-description">Discover the benefits of Ayurveda for your mind, body, and soul.</p>
            <button className="card-button">Read More</button>
          </div>
          <div className="card">
            <FaSpa className="card-icon" />
            <h3 className="card-title">Personalized Plans</h3>
            <p className="card-description">Get wellness plans tailored to your unique needs and lifestyle.</p>
            <button className="card-button">Read More</button>
          </div>
          <div className="card">
            <FaHeartbeat className="card-icon" />
            <h3 className="card-title">Expert Guidance</h3>
            <p className="card-description"> From experienced practitioners and improve your well-being.</p>
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;