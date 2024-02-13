import React from "react";
import styles from '../style/category.module.css'


export function Categorypage({ image, label,handleclick }) {
    return (
        <div className={styles.conatiner}>
          <img src={image} alt={label} className={styles.image} />
          <div className="label">
            <button className="btn btn-light" onClick={handleclick}>{label}</button>
          </div>
        </div>
  );
}
