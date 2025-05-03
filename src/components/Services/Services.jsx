import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { id: 1, topic: 'Yoga' },
    { id: 2, topic: 'Meditation' },
    { id: 3, topic: 'Ayurveda' },
    { id: 4, topic: 'Wellness Retreats' },
    { id: 5, topic: 'Nutrition' },
    { id: 6, topic: 'Fitness' },
  ];

  return (
    <section className="services-section">
      <div className="services-wrapper">
        <div className="services-container">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div
                className={`card-left ${service.id === 1 ? 'with-image' : ''}`}
              >
                {service.topic}
              </div>
              <div className="card-right">{service.topic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
