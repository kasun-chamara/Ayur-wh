import React, { useState, useEffect } from 'react';
import './Hero.css'; // Import the Hero styles

function Hero() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100; // Target count
    const duration = 2000; // Animation duration in milliseconds
    const increment = Math.ceil((end - start) / (duration / 50)); // Increment per frame (50ms per frame)

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setProductCount(start);
    }, 50); // Update every 50ms

    return () => clearInterval(counter); // Cleanup on component unmount
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to AyurDr</h1>
        <h2 className="hero-subheading">Transform Your Health Naturally</h2>
        <p className="hero-description">
          Discover the art of holistic living with PranaVeda. Harness the ancient wisdom of Ayurveda to rejuvenate your body, mind, and spirit. Begin your journey to a balanced, vibrant life — naturally.
        </p>
        <button className="hero-button">Read More</button>
        <div className="hero-stats">
          <div className="stat">
            <h3 className="stat-value">{productCount}+</h3>
            <p className="stat-label">Products</p>
          </div>
          
          <div className="stat">
            <h3 className="stat-value">1K+</h3>
            <p className="stat-label">Customers</p>
          </div>

          <div className="stat">
            <h3 className="stat-value">4.7</h3>
            <p className="stat-label">Reviews</p>
          </div>
        </div>
      </div>
      {/* <div className="hero-image">
        <img src="/path-to-your-image/hero-image.jpg" alt="Holistic Living" />
      </div> */}
    </section>
  );
}

export default Hero;