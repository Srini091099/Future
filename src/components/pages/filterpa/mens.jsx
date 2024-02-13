// Hompageproduct.jsx
import React from 'react';
import Cardpages from '../../pages/card'; 





const Productmen = ({ products, handleClick}) => {
    const menProducts = products.filter(item => item.category === 'mens-watches' ||
    item.category === 'mens-shoes'  );
  
    return (
        <>
        
          
          <div className="header">
            <div className="section">
             
              {menProducts.slice(0, 6).map((item) => (
                <span key={item.id}>
                  <Cardpages item={item} handleClick={handleClick} />
                </span>
              ))}
            </div>
          </div>
        </>
      );
    };
    
    export default Productmen;

