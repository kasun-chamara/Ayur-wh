import React from 'react';
import './Call.css'; // Import the Call styles
import { FaPhoneAlt } from 'react-icons/fa'; // Import a phone icon from react-icons

function Call() {
  return (
    <section className="call-section">
      <div className="call-icon-container">
        <div className="call-column">
          <FaPhoneAlt className="call-icon" />
        </div>
        <div className="call-column middle">
          <h2 className="call-heading">Start a Call !</h2>
        </div>
        <div className="call-column">
          <button className="call-button">Contact</button>
        </div>
      </div>
    </section>
  );
}

export default Call;