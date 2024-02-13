import React, { useState } from 'react';

import Cart from './cart';
import Navbar from './Navbar';

import  emptyCartImage from '../asset/emptyCart.png'

function Defaultpages() {

    const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showCart, setShowCart] = useState(false);

  
 
    return (
      <>
       <Navbar size={cart.length} setShowCart={setShowCart} />
      {cart.length > 0 ? (
        showCart && <Cart cart={cart} setCart={setCart} />
      ) : (
        showCart && <img src={emptyCartImage} alt='empty cart' />
      )}
      {warning && <div className="text-warning fw-bolder">Item already available</div>}
      
    
      </>
    );
}

export default Defaultpages;