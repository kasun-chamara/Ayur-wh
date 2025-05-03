import React, { useState } from 'react';
import './WhyChooseUs.css';
import { FaLeaf, FaSpa, FaUserMd } from 'react-icons/fa';
import image from '../../assets/WhyUs.svg';

function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState('1');

  const features = [
    {
      id: '1',
      icon: <FaSpa className="feature-icon" />,
      title: 'Authentic Ayurvedic Formulas',
      desc: 'Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.'
    },
    {
      id: '2',
      icon: <FaLeaf className="feature-icon" />,
      title: '100% Natural Ingredients',
      desc: 'Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.'
    },
    {
      id: '3',
      icon: <FaUserMd className="feature-icon" />,
      title: 'Personalized Wellness Plans',
      desc: 'Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet.'
    }
  ];

  return (
    <section className="why-choose-us-section py-5">
      <div className="containerwhy container">
        <div className="row align-items-center justify-content-between">
          {/* Left side */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h4 className="why-subheading text-center text-lg-start mb-3">
              Affordable Herbal Supplements <br /> for a Healthier Lifestyle
            </h4>
            <hr className='me-0 me-lg-0 ' />
            <p className="why-description text-center text-lg-start mb-4">
              Aliquam pellentesque quam aenean bibendum mollis per. Duis non rhoncus vulputate maximus enim ornare.
              Diam eu id rutrum lobortis netus neque integer venenatis letius libero a.
            </p>

            {/* Show this tab view on mobile and tablet (sm and md) */}
            <div className="d-block d-lg-none">
              <ul className="nav nav-tabs justify-content-center mb-3">
                {features.map((feature) => (
                  <li className="nav-item" key={feature.id}>
                    <button
                      className={`nav-link ${activeTab === feature.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(feature.id)}
                    >
                      {feature.icon}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content text-center px-3">
                {features.map((feature) =>
                  activeTab === feature.id ? (
                    <div key={feature.id}>
                      <h5>{feature.title}</h5>
                      <p>{feature.desc}</p>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Show this feature list only on large screens */}
            <div className="features-list d-none d-lg-flex flex-column gap-3">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item d-flex align-items-start gap-3">
                  {feature.icon}
                  <div>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img src={image} alt="Why Choose Us" className="why-image img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
