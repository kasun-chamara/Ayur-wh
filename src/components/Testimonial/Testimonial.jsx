import React from 'react';
import './Testimonial.css'; // Import the CSS file

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Ayurveda has transformed my life! The treatments are amazing.',
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg', // Replace with user image URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'The wellness retreats are rejuvenating and peaceful.',
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg', // Replace with user image URL
    },
    {
      id: 3,
      name: 'Michael Brown',
      review: 'Highly recommend their therapies for stress relief.',
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg', // Replace with user image URL
    },
  ];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;