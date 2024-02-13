import React from 'react';
import '../../style/card.css'
function Singleproductpage({ item, handleClick }) {
 
  console.log(item, 'item');
  if (!item) {
    return null; 
  }


  return (
    
    <div className="conatiner">
        <div className="row">
            <div className="col-md-6">
            <img src={item.thumbnail} alt="products"/>
            </div>
            <div className="col-md-4 details">
            <p>Title: {item.title}</p>
            <p>Rating:{item.rating}</p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => handleClick(item)}>Add to cart</button>
            </div>
            <div className="col-md-2">
            
            </div>
            
        </div>
      
    
      
      
     
   
    </div>
  );
}

export default Singleproductpage;
