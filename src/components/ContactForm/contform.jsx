import React from "react";
import "./contform.css";
import { MdEco, MdPerson, MdChat } from "react-icons/md";

const ContactForm = () => (
  <div className="contact-bg">
    <div className="contact-main container">
      <div className="row align-items-center">
        {/* Left: Info Section */}
        <div className="col-12 col-md-6 d-flex">
          <div className="info-section w-100 my-4">
            <h1>Connect with Waharaka Hela Osu</h1>
            <p className="description">
              Reach out to our dedicated team of professionals committed to restoring wellness through authentic Sri Lankan indigenous medicine. Whether you need information, consultation, or guidance on your healing journey, we are here for you.
            </p>
            <ul className="benefit-list">
              <li>
                <span className="icon"><MdEco /></span>
                <div>
                  <strong>Real organic herbal</strong>
                  <p>100% natural remedies made from indigenous herbs using traditional, time-tested healing methods.</p>
                </div>
              </li>
              <li>
                <span className="icon"><MdPerson /></span>
                <div>
                  <strong>Professional Doctors</strong>
                  <p>Expert doctors combining modern and Hela medicine for effective, holistic treatment.</p>
                </div>
              </li>
              <li>
                <span className="icon"><MdChat /></span>
                <div>
                  <strong>Online Consultation</strong>
                  <p>Get personalized indigenous medical advice from certified doctors, anytime, anywhere.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Right: Form Section */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <form className="form-section w-100 my-4" style={{maxWidth: 500}}>
            <h2>Contact Us</h2>
            <div className="form-group-row">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group-row">
              <input type="text" placeholder="Contact Number" required />
            </div>
            <input type="email" placeholder="Your Email" required />
            <select className="custom-select" required>
              <option value="">Select Service</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Your Comment" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;