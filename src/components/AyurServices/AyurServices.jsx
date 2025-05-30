import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import serviceImg from '../../assets/Service-1.svg';
import './AyurServices.css';

const AyurServices = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <section className={`ayur-services-wrapper${showModal ? ' ayur-blur' : ''}`}>
        <div className="container">
          <div className="ayur-services-box row mx-2">
            {/* Left Column - FROM TOP */}
            <div
              className="col-md-6 left-column d-flex flex-column justify-content-center text-black p-4 mt-5"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="1000"
            >
              <h5 className="fw-bold  mt-5 sub-srv">Our Manufacturing Process</h5>
              <h1 className="mb-3 ">Making Herbal Medicine with Modern Machines.</h1>
              <p className="dis-ser">
                <hr className='me-2 me-lg-0 ' />
                Our state-of-the-art automated manufacturing line ensures consistent quality, hygiene, and accuracy in every batch. While our formulas are rooted in ancient Hela Wedakama wisdom, our production process meets the highest modern standards blending tradition with cutting-edge technology to deliver 100% natural, safe, and effective herbal remedies.
              </p>
              <button className="btn-srv mt-3" onClick={handleOpenModal}>Discover More</button>
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
      {showModal && (
        <div className="ayur-modal-overlay" onClick={handleCloseModal}>
          <div className="ayur-modal-content" onClick={e => e.stopPropagation()}>
            <button className="ayur-modal-close-btn" onClick={handleCloseModal}>×</button>
            <iframe
              allowFullScreen
              scrolling="no"
              className="ayur-modal-iframe"
              src="https://heyzine.com/flip-book/8f418b7b1e.html"
              title="ayur-flipbook"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default AyurServices;