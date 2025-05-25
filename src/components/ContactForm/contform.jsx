import React from "react";
import "./contform.css";
import { MdLocalHospital, MdSpa, MdNaturePeople, MdEco, MdPerson, MdChat } from "react-icons/md";

const ContactForm = () => (
  <div className="contact-container">
    <div className="contact-left">
      <div className="benefit-content">
        <h5 className="mt-5 pt-5 ms-5">Benefit</h5>
        <h1 className="ms-5">Nature’s secret for your health.</h1>
        <p className="ms-5 main-sub">
          Aliquam pellentesque quam aenean bibendum mollis per. Duis non rhoncus vulputate maximus enim ornare. Diam eu id rutrum lobortis netus neque integer venenatis letius libero a.
        </p>
        <ul className="benefit-list ms-5">
          <li>
            <span className="benefit-list-icon"><MdEco /></span>
            <div>
             <strong className="main-sub-il">Real organic herbal</strong>
              <br />
              <p className=" main-sub-icon"> Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p>
            </div>
          </li>
          <li>
            <span className="benefit-list-icon"><MdPerson /></span>
            <div>
              <strong className="main-sub-il">Professional Therapist</strong>
              <br />
             <p className=" main-sub-icon"> Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p> 
            </div>
          </li>
          <li>
            <span className="benefit-list-icon"><MdChat /></span>
            <div>
             <strong className="main-sub-il">Free Consultations</strong>
              <br />
             <p className="main-sub-icon"> Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.</p> 
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="contact-right mt-5 me-5">
      <form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Contact Number" required />
        </div>
        <input type="email" placeholder="Your Email" required />
        <div className="form-row">
          <input type="date" required />
          <input type="time" required />
        </div>
        <select required>
          <option value="">Select Service</option>
          <option value="consultation">Consultation</option>
          <option value="therapy">Therapy</option>
          <option value="massage">Massage</option>
          <option value="other">Other</option>
        </select>
        <textarea placeholder="Your Comment" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default ContactForm;