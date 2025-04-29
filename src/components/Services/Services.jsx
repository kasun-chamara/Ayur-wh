import React from 'react';
import './Services.css'; // Import the updated Services styles

function Services() {
  const services = [
    { id: 1, topic: 'Yoga', description: 'Experience the benefits of yoga for your mind and body.' },
    { id: 2, topic: 'Meditation', description: 'Achieve inner peace through guided meditation.' },
    { id: 3, topic: 'Ayurveda', description: 'Discover holistic healing with Ayurveda practices.' },
    { id: 4, topic: 'Wellness Retreats', description: 'Join our retreats for complete rejuvenation.' },
    { id: 5, topic: 'Nutrition', description: 'Learn about balanced diets and healthy eating.' },
    { id: 6, topic: 'Fitness', description: 'Stay fit with our personalized fitness programs.' },
    { id: 7, topic: 'Therapies', description: 'Relax with our therapeutic treatments.' },
    { id: 8, topic: 'Workshops', description: 'Participate in workshops to enhance your skills.' },
    { id: 9, topic: 'Spa', description: 'Rejuvenate with our luxurious spa treatments.' },
    { id: 10, topic: 'Detox', description: 'Cleanse your body with our detox programs.' },
    { id: 11, topic: 'Mindfulness', description: 'Practice mindfulness for mental clarity.' },
    { id: 12, topic: 'Healing', description: 'Explore natural healing techniques for wellness.' },
  ];

  const imageUrl = 'https://www.ayurvedacollege.com/wp-content/uploads/2022/08/Ayurvedic-Medicine-1.jpg';

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">What We Offer</h2>
        <p className="services-subtitle">Experience the Power of Ayurveda for Better Living</p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${
              (index === 0 || index === 2 || index === 5 || index === 7 || index === 8 || index === 10) ? 'with-image' : 'with-details'
            }`}
          >
            {(index === 0 || index === 2 || index === 5 || index === 7 || index === 8 || index === 10) ? (
              <img src={imageUrl} alt="Ayurvedic Medicine" className="service-image" />
            ) : (
              <div className="service-details">
                <h3 className="service-topic">{service.topic}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">More</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;