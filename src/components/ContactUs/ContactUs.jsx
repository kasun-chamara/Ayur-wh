import React from 'react';
import ContactForm from '../ContactForm/contform';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contactus-page-wrapper">
      <div className="contactus-heading-center">
        <h1 className="contactus-main-title">Find and Connect with Waharaka Hela Osu.</h1>
        <p className="contactus-main-desc">
          Reach out to us or visit one of our island-wide branches to begin your journey to holistic healing. Use the map below to find your nearest Waharaka Hela Osu center and connect with our expert team for consultations, treatments, or information.</p>
      </div>
      <div className="contactus-container">
        <div className="contactus-half contactus-half-left">
          <div className="map-and-label">
            <iframe
              title="Map 1"
              src="https://www.google.com/maps?q=6.055667041449875,80.21406566256438&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px', minHeight: '350px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="branch-label">Galle Branch</div>
          </div>
        </div>
        <div className="contactus-half contactus-half-right">
          <div className="map-and-label">
            <iframe
              title="Map 2"
              src="https://www.google.com/maps?q=6.848797049644052,80.00265907781757&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px', minHeight: '350px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="branch-label">Homagama Branch</div>
          </div>
        </div>
      </div>
      <div className="contactform-fullwidth">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;