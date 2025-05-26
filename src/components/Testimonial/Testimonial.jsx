import React from 'react';
import './Testimonial.css';
import ratingBadge from '../../assets/rating99.png';

// Import images for local assets
import rew01 from '../../assets/rew01.jpg';
import rew02 from '../../assets/rew02.jpg';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Sanjaya Aluthge',
      review: 'මට මාස 4ක් උණ සැදී නොයෙක් ආකාරයේ Antibiotics අරගත්තත් සුව වුයේ නැ. ජයවර්ධනපුර රෝහලේ දින 20ක් නැවති බෙහෙත් ගත්තා.හරිම පුදුමයි මට, එය දිව්‍යමය ඖෂධයක්. මාගේ අසනීප තත්වය මේ වෙද්දි 100% සුවයි. මා මෙය ගැන ඕනෑම තැනක ඉතා විශ්වාසයෙන් ප්‍රකාශ කර සිටිමි',
      image: rew01,
      rating: 5,
    },
    {
      id: 2,
      name: 'Paskuwal Mendis',
      review: 'මගේ මිතුරෙක්ට කොවිඩ් හැදිලා පැරසිටමෝල් බිවුවට උණ බහින්නෙ නැතුව තිබුනා. වහරක උණ පැණිය ගත්තාම උණ බැහැලා කෑම කන්න පුලුවන් වුනා.තවත් මම දන්න කිහිප දෙනෙක් මේ බෙහෙත පාවිච්චි කර සුවය ලබා තිබෙනවා',
      image: rew02,
      rating: 5,
    },
    {
      id: 3,
      name: 'U.Indunil',
      review: 'මටත් කෝවිඩ් හැදුණා .ජීවිතේටම හැදිල නැති ඉතා තද උණක්.කොහාට වත් යන්න එන්න බැරි කාලෙ කෑගල්ලේ උදාර ලක්ෂිත මහත්මයා මට උන පෑනිය ලැබෙන සැලැස්සුවා .ඒකෙන්ම සියල්ල නිවාරණය උනා.සාදු සාදු සාදු හැමෝටම පිං .මම ඉඳුනිල්',
      image: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
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