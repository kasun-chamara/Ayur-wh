import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import serviceImg from '../../assets/Service.svg';
import './AyurServices.css';

const AyurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="ayur-services-wrapper ">
      <div className="container">
        <div className="ayur-services-box row mx-2">
          {/* Left Column - FROM TOP */}
          <div
            className="col-md-6 left-column d-flex flex-column justify-content-center text-black p-4"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <h5 className="fw-bold  mt-5 sub-srv">Our Services</h5>
            <h1 className="mb-3 ">Experience the Power of Ayurveda for Better Living.</h1>
            <p className="dis-ser">
            <hr className='me-2 me-lg-0 ' />
            Aliquam pellentesque quam aenean bibendum mollis per. Duis non rhoncus vulputate maximus enim ornare. Diam eu id rutrum lobortis netus neque integer venenatis letius libero a. </p>
            <button className="btn-srv mt-3 ">Discover More</button>
          </div>

          {/* Right Column - FROM BOTTOM */}
          <div
            className="col-md-6 right-column d-flex align-items-center justify-content-center p-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <img src={serviceImg} alt="Ayurvedic Services" className="img-fluid service-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyurServices;
