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
        <h2>Ancient Wisdom for Modern Living.</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries <br></br> <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <button className="rating-button">Rate Now</button>
      </div>
    </div>
  );
};

export default Rating;