// Cardpages.jsx
import React from 'react';
import '../style/card.css';
import { Link } from 'react-router-dom';

function Cardpages({ item, handleClick }) {
  if (!item) {
    return null; 
  }

  return (
    <>
      <div className="cards">
        <div className="image_box">
          <Link to={`/item/${item.id}`}>
          <img src={item.thumbnail} alt="product" />
          
          </Link>
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
