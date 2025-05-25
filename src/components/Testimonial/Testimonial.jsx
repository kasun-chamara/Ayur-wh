import React from 'react';
import './Testimonial.css';
import ratingBadge from '../../assets/rating99.png'; // Adjust path if needed

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Ayurveda has transformed my life! The treatments are amazing.',
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'The wellness retreats are rejuvenating and peaceful.',
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Brown',
      review: 'Highly recommend their therapies for stress relief.',
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg',
      rating: 5,
    },
  ];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={ratingBadge}
              alt="99 Rating"
              className="testimonial-badge"
            />
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <div className="testimonial-stars">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="star">&#9733;</span>
              ))}
            </div>
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;