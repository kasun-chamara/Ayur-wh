import React from 'react';
import './Features.css';
import { FaPlay, FaLeaf, FaSpa, FaHeartbeat } from 'react-icons/fa';

function Features() {
  return (
    <section className="features-section">
      <div className="container text-center text-white py-5">
        <h2 className="features-heading mb-3">
          Join our growing community of <br></br>20,000+ Ayurveda enthusiasts!
        </h2>
        <p className="features-description mb-4">
          Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales.
        </p>

        <div className="features-buttons mb-5 d-flex justify-content-center">
          <div className="video-button">
            <FaPlay className="video-icon" />
          </div>
        </div>

        <div className="row g-4 features-cards">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <FaLeaf className="card-icon" />
              <h3 className="card-title">Holistic Health</h3>
              <p className="card-description">
                Discover the benefits of Ayurveda for your mind, body, and soul.
              </p>
              <button className="card-button">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <FaSpa className="card-icon" />
              <h3 className="card-title">Personalized Plans</h3>
              <p className="card-description">
                Get wellness plans tailored to your unique needs and lifestyle.
              </p>
              <button className="card-button">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <FaHeartbeat className="card-icon " />
              <h3 className="card-title">Expert Guidance</h3>
              <p className="card-description">
                From experienced practitioners and improve your well-being.
              </p>
              <button className="card-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
