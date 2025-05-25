import React, { useState } from 'react';
import './Product.css';

// You must import images for React to bundle them correctly!
import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';
import img8 from '../../assets/07.png';

const products = [
  { title: 'Product 1', img: img1 },
  { title: 'Product 2', img: img2 },
  { title: 'Product 3', img: img3 },
  { title: 'Product 4', img: img4 },
  { title: 'Product 5', img: img5 },
  { title: 'Product 6', img: img6 },
  { title: 'Product 7', img: img7 },
  { title: 'Product 8', img: img8 },
];

function Product() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <>
      <div className="product-main-container">
        <div className="product-left"></div>
        <div className="product-right product-right-single">
          <h2 className="product-topic">Product Title</h2>
          <p className="product-description">
            The Indigenous Medicine of Sri Lanka or "Hela Wedakama" as it is known is Sri
            Lanka’s unique centuries old heritage of a series of ancient indigenous medical
            practices passed down from one generation to the next. While some ancient
            cities of Sri Lanka including Polonnaruwa, Medirigiriya, Anuradhapura and
            Mihinthale still hold the ruins of what may well be the first hospitals in the
            world, Sri Lanka lays proud claim to the fact that it is the first country in the
            world to have pioneered the establishment of systematic hospitals solely based
            on Hela Wedakama.
          </p>
          <button className="product-buy-btn">Buy Product</button>
        </div>
      </div>
      <div className="product-grid-7">
        {products.map((item, idx) => (
          <div
            className="product-card"
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="product-card-title">{item.title}</div>
            <div className="product-card-img-wrapper">
              <img src={item.img} alt={item.title} className="product-card-img" />
              <div className={`sheen${hoveredIdx === idx ? ' active' : ''}`}></div>
              {hoveredIdx === idx && (
                <button className="product-card-btn">Buy now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;