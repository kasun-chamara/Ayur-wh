import React from 'react';
import './Profile.css';
import MiddleLogo from '../../assets/MiddleLg.svg';

const Profile = () => {
  return (
    <div className="profile-grid-container">
      {/* Center SVG Overlay */}
      <img src={MiddleLogo} alt="Center Logo" className="center-svg" />

      {/* Top-left - image */}
      <div className="grid-box box1"></div>

      {/* Top-right - English content */}
      <div className="grid-box box2">
        <div className="content dark-text">
          <h2>Welcome to Ayurveda</h2>
          <p>Experience the healing power of ancient traditions with modern comfort.</p>
          <button className="unique-btn">Learn More</button>
        </div>
      </div>

      {/* Bottom-left - Sinhala content */}
      <div className="grid-box box3">
        <div className="content dark-text">
          <h2>ආයුර්වේදය වෙත පිළිගනිමු</h2>
          <p>පැරණි ප්‍රතිකාර ක්‍රමයන් සුවපත්කාරී අත්දැකීම් වෙත පියනගන්න.</p>
          <button className="unique-btn">වැඩිදුර කියවන්න</button>
        </div>
      </div>

      {/* Bottom-right - image */}
      <div className="grid-box box4"></div>
    </div>
  );
};

export default Profile;
