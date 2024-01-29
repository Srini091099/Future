// import React, { useState } from 'react';
// import Cart from './cart';
// import '../style/toogle.module.css';

// export default function Starttoo({ size }) {
//   const [showCart, setShowCart] = useState(false);

//   const handleToggle = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <>
//       <div className="toogle-button">
//         <button className="btn toogle-button" onClick={handleToggle}>
         
//         </button>
//         {showCart && (
//           <div className="custom-offcanvas offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
//             <div className="offcanvas-header">
             
//               <button className="btn-close" onClick={handleToggle} />
//             </div>
//             <div className="offcanvas-body">
//               <Cart />
//               <span className='size'>{size}</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
