import React from 'react';
import './Product.css'; // Import the CSS file

function Product() {
  const products = [
    {
      id: 1,
      name: 'Herbal Tea',
      description: 'A refreshing blend of natural herbs for a healthy lifestyle.',
      image: 'https://yadasutra.com/cdn/shop/files/IMG_0413-final-scaled.jpg?v=1729180902', // Replace with product image URL
    },
    {
      id: 2,
      name: 'Ayurvedic Oil',
      description: 'Relieve stress and rejuvenate your body with our herbal oil.',
      image: 'https://yadasutra.com/cdn/shop/files/IMG_0413-final-scaled.jpg?v=1729180902', // Replace with product image URL
    },
    {
      id: 3,
      name: 'Organic Spices',
      description: 'Enhance your meals with our premium organic spices.',
      image: 'https://yadasutra.com/cdn/shop/files/IMG_0413-final-scaled.jpg?v=1729180902', // Replace with product image URL
    },
  ];

  return (
    <section className="product-section">
      <h2 className="product-title">Our Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <button className="product-button">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;