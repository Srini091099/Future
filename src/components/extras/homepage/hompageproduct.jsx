// Hompageproduct.jsx
import React from 'react';
import Cardpages from '../../pages/card'; 
import './hoproduct.css'


const Hompageproduct = ({ products, handleClick }) => {
  return (
    <>
    <h5 className="heading">!! Exclusive offer !!</h5>
    <div className="header">
    <div className="section">
    {products.slice(0, 6).map((item) => (
     
      <Cardpages key={item.id} item={item} handleClick={handleClick}/>
    
    
    ))}
  </div>
  </div>
  </>
  );
};

export default Hompageproduct;

