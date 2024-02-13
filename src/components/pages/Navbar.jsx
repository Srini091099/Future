import React from 'react';
import '../pages/Navbar.css';

const Navbar = ({ size, setShowCart }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
   
      <nav className='nav'>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShowCart(true)}>
          SOO
          <span className="text-warning">RAI..</span>
          </span>
          <div className="cart" onClick={() => setShowCart((prev) => !prev)}>
            <span>
              <span className="material-icons">shopping_cart</span>
            </span>
            <span>{size}</span>
          </div>
        </div>
        <span className="profile_icon" onClick={() => console.log("Profile icon clicked")}>
          <span className="material-symbols-outlined">person</span>
        </span>  
      </nav>
    </>
  );
};

export default Navbar;
