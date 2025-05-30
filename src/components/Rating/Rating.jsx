import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Rating.css";
import RatingsImage from "../../assets/Rtingimage.png";

const Rating = () => {
  return (
    <div className="container rating-bg d-flex flex-column align-items-center justify-content-center py-5 my-5 ">
      <img src={RatingsImage} alt="Ratings" className="img-fluid rounded mb-4" style={{maxWidth: 300}} />
      <div className="text-center rating-content">
        <h2 className="mb-3">National Recognition at Golden Inmediens 2023</h2>
        <h4 className="mb-3">Waharaka Hela Osu – Silver Award Winner for Herbal Production</h4>
        <p>
          Waharaka Hela Osu proudly received the Silver Award for Special Recognition in Herbal Production at the prestigious Golden Inmediens 2023, held at Waters Edge, Battaramulla on March 19, 2024. This honor celebrates our unwavering commitment to reviving Sri Lanka’s indigenous healing through 100% natural, effective, and side-effect-free herbal solutions—crafted under ancient wisdom and modern standards.
        </p>
      </div>
    </div>
  );
};

export default Rating;