import React, { useEffect } from 'react';
import './Profile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="profile-grid-container">
      {/* Top-left - image */}
      <div className="grid-box box1" data-aos="fade-right"></div>

      {/* Top-right - English content */}
      <div className="grid-box box2">
        <div className="content dark-text">
          <h2>Welcome to Ayurveda</h2>
          <p>Experience the healing power of ancient traditions with modern comfort.</p>
          <button className="unique-btn ms-sm-0">Learn More</button>
        </div>
      </div>

      {/* Bottom-left - Sinhala content */}
      <div className="grid-box box3">
        <div className="content dark-text">
          <h2>ආයුර්වේදය වෙත පිළිගනිමු</h2>
          <p>පැරණි ප්‍රතිකාර ක්‍රමයන් සුවපත්කාරී අත්දැකීම් වෙත පියනගන්න.</p>
          <button className="unique-btn ms-sm-0">වැඩිදුර කියවන්න</button>
        </div>
      </div>

      {/* Bottom-right - image */}
      <div className="grid-box box4" data-aos="fade-left"></div>
    </div>
  );
};

export default Profile;
