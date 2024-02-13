import React from 'react';
import Cart from './cart';  

function CartPage({ cart, setCart }) {
    console.log(cart)
  return (
   
    <div>
      <Cart cart={cart} setCart={setCart} showCart={true} />
      
    </div>
  );
}

export default CartPage;
