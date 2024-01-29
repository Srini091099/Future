import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cardpages from "./card";
import List from "../../data";
import Navbar from "./Navbar";
import '../style/hompage.module.css'
import Cart from "./cart";
import { Sliderapp } from "../extras/slider";
import  categories_1 from'../asset/categories_1.png'
import  categories_2 from'../asset/categories_2.png'
import  categories_3 from'../asset/categories_3.png'

import emptyCartImage from '../asset/emptyCart.png';
import { Categorypage } from "./categorypage";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/reducer";
import axios from "axios"
import { Rootapp } from "./rootpage/rootapp";



export function Homepage() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showCart, setShowCart] = useState(false);






  const isItemPresentInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const handleClick = (item) => {
    if (isItemPresentInCart(item.id)) {
      setWarning(true);

      setTimeout(() => {
        setWarning(false);
      }, 3000);

      return;
    }

    setCart([...cart, item]);
  };

  console.log(process.env.PUBLIC_URL + '/asset/emptyCart.png');

  return (
    <>
    
   
    <Navbar size={cart.length} setShowCart={setShowCart} />
    {cart.length > 0 ? (
      showCart && <Cart cart={cart} setCart={setCart} />
    ) : (
      showCart && <img src={emptyCartImage} alt='empty cart' />
    )}
    {warning && <div className="text-warning fw-bolder">Item already available</div>}
    <Sliderapp/>
  <div className="container">
    <div className="row mt-3">
    <div className="col-md-2">

   <span className="text-warning fw-bolder"> <Link  to='/Filter'>filter </Link></span>
    </div>
      <div className="col-md-4">
<Categorypage image={categories_2} label="mens"/>
      </div>
      <div className="col-md-4">
      <Categorypage image={categories_1} label="Womens"/>  
      </div>

      <div className="col-md-4">
      <Categorypage image={categories_3} label="accesories"/>  
        </div>
    </div>
  </div>

    <div className="section">
      {List.item.map((item) => (
        <Cardpages key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  </>
);

}
