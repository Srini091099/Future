import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from '../pages/cart';
import Navbar from '../pages/Navbar'; 
import { Rootapp } from "../pages/rootpage/rootapp";
import Productwomen from "../pages/filterpa/womens";
import List from "../../data";
import Productmen from "../pages/filterpa/mens";
import emptyCartImage from '../asset/emptyCart.png'
import { Homepage } from "../pages/homepages";
import Productpage from "../pages/productpage/productpage";

export function Routerapp() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleClick = (item) => {
    const isItemPresentInCart = cart.some((product) => product.id === item.id);
    if (!isItemPresentInCart) {
      setCart([...cart, item]);
    } else {
      console.log('Item already in the cart');
    }
  };

  return (
    <>
      <Navbar size={cart.length} setShowCart={setShowCart} />
      {cart.length > 0 && showCart && <Cart cart={cart} setCart={setCart} />}
      {cart.length === 0 && showCart && <img src={emptyCartImage} alt='empty cart' />}
      <div
        data-spy="scroll"
        data-target="#list-example"
        data-offset={0}
        className="scrollspy-example"
      ></div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage handleClick={handleClick} />} /> 
          <Route path="/Filter" element={<Rootapp  handleClick={handleClick}/> } />
          <Route path="/women" element={<Productwomen products={List.item} handleClick={handleClick} />} />
          <Route path="/mens" element={<Productmen products={List.item} handleClick={handleClick}/>} />
          <Route path="/item/:id" element={<Productpage  key={List.item.id} products={List.item} handleClick={handleClick}/>}/>
        </Routes>
      </Router>
    </>
  );
}
