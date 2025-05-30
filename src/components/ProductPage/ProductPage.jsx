import React from 'react';
import './ProductPage.css';

const products = [
  {
    title: 'Herbal Pain Relief Oil',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Natural oil for pain relief and relaxation.',
    price: 'Rs. 1200'
  },
  {
    title: 'Varicose Vein Oil',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    desc: 'Clinically tested oil for varicose veins.',
    price: 'Rs. 950'
  },
  {
    title: 'Fever Syrup',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Natural syrup for fever and viral relief.',
    price: 'Rs. 1100'
  },
  {
    title: 'Herbal Hair Oil',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: 'Plant-based oil for healthy hair.',
    price: 'Rs. 1300'
  },
  {
    title: 'Initial Medicine',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'Blend for intestinal health and immunity.',
    price: 'Rs. 1000'
  },
  {
    title: 'Insect Repellent Vapour',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    desc: 'Natural vapour for insect protection.',
    price: 'Rs. 800'
  },
  {
    title: 'Indigestion Relief Tea',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    desc: 'Tea for fast indigestion relief.',
    price: 'Rs. 900'
  },
  {
    title: 'Immunity Booster',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
    desc: 'Boost your immunity naturally.',
    price: 'Rs. 1250'
  },
  {
    title: 'Herbal Cough Syrup',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    desc: 'Soothes cough and throat irritation.',
    price: 'Rs. 950'
  },
  {
    title: 'Liver Tonic',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    desc: 'Supports healthy liver function.',
    price: 'Rs. 1100'
  },
  {
    title: 'Herbal Face Cream',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
    desc: 'Natural cream for glowing skin.',
    price: 'Rs. 1400'
  },
  {
    title: 'Digestive Capsules',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'Capsules for better digestion.',
    price: 'Rs. 1000'
  },
  {
    title: 'Herbal Toothpaste',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Natural toothpaste for oral care.',
    price: 'Rs. 600'
  },
  {
    title: 'Energy Booster Drink',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Drink for instant energy.',
    price: 'Rs. 850'
  },
  {
    title: 'Herbal Balm',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    desc: 'Balm for aches and pains.',
    price: 'Rs. 700'
  },
  {
    title: 'Herbal Shampoo',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: 'Shampoo for healthy hair.',
    price: 'Rs. 950'
  },
  {
    title: 'Herbal Soap',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    desc: 'Soap for soft and clean skin.',
    price: 'Rs. 400'
  },
  {
    title: 'Herbal Eye Drops',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    desc: 'Eye drops for clear vision.',
    price: 'Rs. 650'
  },
  {
    title: 'Herbal Capsules',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
    desc: 'Capsules for overall wellness.',
    price: 'Rs. 1200'
  },
  {
    title: 'Herbal Body Lotion',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
    desc: 'Lotion for smooth skin.',
    price: 'Rs. 900'
  },
];

function ProductPage() {
  return (
    <div className="productpage-container">
      <div className="productpage-header">
        <h1 className="maintitle">Waharaka Products</h1>
        <p className="productpage-desc ">
          The Waharaka Hela Osu product range includes cures and treatments for many maladies, ailments, diseases and illnesses prevalent in Sri Lankans of all ages.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {products.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={idx}>
              <div className="productcard-new w-100">
                <h2 className="productcard-title-new">{item.title}</h2>
                <img src={item.img} alt={item.title} className="productcard-img-new" />
                <p className="productcard-desc-new">{item.desc}</p>
                <div className="productcard-bottom-row">
                  <span className="productcard-price">{item.price}</span>
                  <a
                    href="https://wa.me/94761387620"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <button className="productcard-btn-new">Buy</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;