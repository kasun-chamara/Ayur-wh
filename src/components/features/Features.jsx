import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Features.css';
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa6';

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="features-section">
      <div className="container text-center py-5">
        {/* Heading and description */}
        <div data-aos="fade-down">
          <h1 className="features-heading mb-3">
            Thousands Have Chosen Natural Healing Will You?<br />Your Journey to Natural Health Starts Here.
          </h1>
          <p className="features-description mb-4">
            Stay connected with us, Experience Hela Healing Beyond the social media
          </p>
          <div className="features-social mb-5 d-flex justify-content-center gap-4">
            <a
              href="https://www.facebook.com/share/1AZEUgLUXX/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtu.be/AwG47r_XldE?si=y93t9pdqadww44V4"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@waharaka.hela.osu?_t=ZS-8wftxhiy0os&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon tiktok"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;