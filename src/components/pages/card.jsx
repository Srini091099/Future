// Cardpages.jsx

import React from 'react';
import '../style/card.css';

function Cardpages({ item, handleClick }) {
  if (!item) {
    return null; // or you can render a loading indicator or handle it in another way
  }

  return (
    <>
     <div className="cards">
        <div className="image_box">
          
          <img src={item.thumbnail} alt="product" />
        </div>
        <div className="details">
          <p>{item.title}</p>
          <p>Price - {item.price} RS</p>
          <button onClick={() => handleClick(item)}>Add to cart+</button>
        </div>
      </div>
    </>
  );
}

export default Cardpages;
