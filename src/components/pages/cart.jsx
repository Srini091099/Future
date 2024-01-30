import React, { useEffect, useState } from 'react';
import styles from '../style/cart.module.css';

function Cart({ cart, setCart }) {
  const [amount, setAmount] = useState(0);

  const handlePrice = useCallback(() => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * (item.amount || 1);
    });
    setAmount(totalAmount);
  }, [cart]);

  const handleremove = () => {
    let removetotal = 0;
    cart.forEach((item) => {
      removetotal -= item.price * (item.amount || 1);
    });
    setAmount((prevAmount) => Math.max(prevAmount + removetotal, 0));
  };

  const handleIncreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, amount: (item.amount || 1) + 1 }
          : item
      )
    );
  };
  const handledelete = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemId)
    );
  };
  

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);  // Add handlePrice as a dependency


  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
      />
      {cart &&
        cart.map((item) => (
          <div key={item.id} className={styles.cart_box}>
            <div className={styles.cart_img}>
              <img src={item.thumbnail} alt={item.title} />
              <div className={styles.item_info}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <div className={styles.rating}>
                  <i className="material-icons-outlined">star</i>
                  {item.rating}
                </div>
              </div>
            </div>

            <div>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button
                className={styles.button}
                onClick={handlePrice}
              >
                {item.price}
              </button>
              <button onClick={()=>handleremove(item.id)}>-</button>
            </div>
            <div>
              <button className={styles.button}>{item.amount || 1}</button>
              <button className={styles.button} onClick={()=>handledelete(item.id)}>remove</button>
            </div>
          </div>
        ))}
      <div className={styles.total}>
        <span>
          total price
          <span>RS-{amount}</span>
        </span>
      </div>
    </div>
  );
}

export default Cart;
