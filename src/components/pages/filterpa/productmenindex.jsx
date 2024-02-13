import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../style/category.module.css'
function Productmenindex({label,image}) {
    return (
      <div>
        <div className="col-md-4">
          <Link to='/Mens'>
          <img src={image} alt={label} className={styles.image} />
          
          </Link>
        
        </div>
        
      </div>
    );
  }

export default Productmenindex;