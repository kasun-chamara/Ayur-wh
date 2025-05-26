import React, { useState } from 'react';
import './Product.css';

import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';
import img8 from '../../assets/07.png';

const products = [
  { title: 'ප්‍රාණ වර්ධන තෙල', img: img1, price: 'Rs. 580' },
  { title: 'නහර ගැට සමන තෙල', img: img2, price: 'Rs. 560' },
  { title: 'වහරක උණ පැණිය', img: img3, price: 'Rs. 350' },
  { title: 'සඳුනිකා හෙයා ඔයිල්', img: img4, price: 'Rs. 1480' },
  { title: 'වහරක මුල් ඔසුව', img: img5, price: 'Rs. 3840' },
  { title: 'වහරක සුවඳ ධූපය', img: img6, price: 'Rs. 380' },
  { title: 'අජීර්ණ සමන පේයාව', img: img7, price: 'Rs. 70' },
  { title: 'අජීර්ණ සමන පේයාව', img: img8, price: 'Rs. 70' },
];

function Product() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <>
      <div className="product-main-container">
        <div className="product-left"></div>
        <div className="product-right product-right-single">
          <h1 className="product-topic">Our Products</h1>
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
            {/* Price under the name */}
            {item.price && (
              <div className="product-card-price">{item.price}</div>
            )}
            <div className="product-card-img-wrapper">
              <img src={item.img} alt={item.title} className="product-card-img" />
              <div className={`sheen${hoveredIdx === idx ? ' active' : ''}`}></div>
             {hoveredIdx === idx && (
  <a
    href="https://wa.me/94761387620"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <button className="product-card-btn">Buy now</button>
  </a>
)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;