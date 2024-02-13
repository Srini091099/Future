// Productwomen.jsx
import React from 'react';
import Cardpages from '../../pages/card'; 


const Productwomen = ({ products, handleClick }) => {
    const womensProducts = products.filter((item) =>
        item.category === 'womens-dresses' ||
        item.category === 'womens-bags' ||
        item.category === 'womens-jewellery' ||
        item.category === 'Women Sweaters Wool' ||
        item.category === 'womens-shoes'
    );

    return (
        <>
          
            <div className="header">
                <div className="section">
                    {womensProducts.map((item) => (
                        <span  key={item.id}>
                            
                            <Cardpages item={item} handleClick={handleClick} />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Productwomen;
