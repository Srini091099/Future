import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../style/category.module.css';


function Productindex({ handleClick, label, image }) {
  return (
    <div>
      <div className="col-md-4">
        <Link to='/women'>
          <img src={image} alt={label} className={styles.image} onClick={handleClick} />

        </Link>
      </div>
    </div>
  );
}

export default Productindex;
