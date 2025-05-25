import React from 'react';
import './ProductPage.css';

import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';

const products = [
  { title: 'Product 1', img: img1, desc: 'A reinvigorating remedy for any form of pain, mild or severe, this oil cures reduces pain arising from bumps and swelling, reinvigorates blood vessels and cures heart weakness. This special blend of Prana Jeewa Leaves, Cinnamon, Musk, and Coconut, Mustard, Mee, Gingelly, Margosa, and Castor oils also reinvigorates the heart of terminally ill patients with impaired heart beats.' },
  { title: 'Product 2', img: img2, desc: 'Made from 100% all natural Ethana, Belatana, Arecanut Leaves, Beli fruit leaves, and Sesame Oil, this clinically tested and proven oil is guaranteed to alleviate varicose veins in hands and legs.' },
  { title: 'Product 3', img: img3, desc: 'Recognized by the Sri Lanka Ayurvedic Department as a cure all remedy for any kind of Fever, the Waharaka Fever Syrup is also a proven cure for the COVID 19 virus and was used by hundreds of thousands of Sri Lankans both locally and overseas with many positive benefits. This 100% Natural product contains no harmful ingredients and eliminates disease at the origin and brings quick relief in a few quick doses. It is also firmly believed that this syrup will be a guaranteed remedy for any other viral pandemic that may affect mankind in the future.' },
  { title: 'Product 4', img: img4, desc: 'Formulated to treat all hair and scalp related ailments, this hair oil is 100% natural and entirely plant based.' },
  { title: 'Waharaka Initial Medicine', img: img5, desc: 'A unique blend of 3 herbal medicines, the Waharaka Initial Medicine has been specially formulated to cure and protect against intestinal illnesses and glandular fats and other harmful deposits and is guaranteed to revitalise, rejuvenate, and immunize the excretory system.' },
  { title: 'Product 6', img: img6, desc: 'A uniquely aromatic insect repellent vapour, this 100% natural vapour is guaranteed to be completely harmless to the human body while providing 36 hour protection from all household insects including mosquitos, flies, and ants.' },
  { title: 'Product 7', img: img7, desc: 'This unique tea formulated using a tried and tested indigestion relieving formula is guaranteed to provide fast relief from indigestion.' },
];

function ProductPage() {
  return (
    <div className="productpage-container">
      <h1 className="productpage-title">Product Page</h1>
      <p className="productpage-desc">
        The Waharaka Hela Osu product range includes cures and treatments for many
        maladies, ailments, diseases and illnesses prevalent in Sri Lankans of all ages.
      </p>
      <div className="productcard-list">
        {products.map((item, idx) => (
          <div className="productcard" key={idx}>
            <div className="productcard-img-wrap">
              <img src={item.img} alt={item.title} className="productcard-img" />
            </div>
            <div className="productcard-content">
              <h2 className="productcard-title">{item.title}</h2>
              <p className="productcard-desc">{item.desc}</p>
              <button className="productcard-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;