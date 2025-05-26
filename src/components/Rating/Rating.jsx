import React from "react";
import "./Rating.css";
import RatingsImage from "../../assets/Ratings.png"; // Updated path to the image

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating-image">
        <img src={RatingsImage} alt="Ratings" />
      </div>
      <div className="rating-content">
        <h2>National Recognition at Golden Inmediens 2023</h2>
        <h4>Waharaka Hela Osu – Silver Award Winner for Herbal Production</h4>
        <p>
       Waharaka Hela Osu proudly received the Silver Award for Special Recognition in Herbal Production at the prestigious Golden Inmediens 2023, held at Waters Edge, Battaramulla on March 19, 2024. This honor celebrates our unwavering commitment to reviving Sri Lanka’s indigenous healing through 100% natural, effective, and side-effect-free herbal solutions—crafted under ancient wisdom and modern standards.</p>
        <button className="rating-button">Rate Now</button>
      </div>
    </div>
  );
};

export default Rating;