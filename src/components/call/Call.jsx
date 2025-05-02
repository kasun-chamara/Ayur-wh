import React from 'react';
import './Call.css';
import { FaHeadset } from 'react-icons/fa';

const Call = () => {
  return (
    <div className="call-wrapper mt-0">
      <div className="call-container d-flex justify-content-center align-items-center">
        <FaHeadset className="call-icon" />
        <span className="call-text d-none d-md-inline">Start Your Personal Health Plan with Ayur</span>
        <button className="call-btn ms-3">Get Started</button>
      </div>
    </div>
  );
};

export default Call;
