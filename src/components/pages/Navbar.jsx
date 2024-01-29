import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Navbar.css';
import Cart from './cart';
import Starttoo, { Tooglecart } from './toogle';

const Navbar = ({ size, setShowCart }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <nav className='nav'>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShowCart(true)}>
            Myshopping
          </span>
          <div className="cart" onClick={() => setShowCart((prev) => !prev)}>
            <span>
            
          <span className="material-icons ">shopping_cart</span>
        
            
            </span>
            <span>{size}</span>
           
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
