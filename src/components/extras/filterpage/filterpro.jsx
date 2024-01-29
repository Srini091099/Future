// Filterpro.jsx

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux/reducer';
import Cardpages from '../../pages/card';

function Filterpro() {
  const { selectedCatg, list } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
   
    if (selectedCatg) {
      axios.get(`https://dummyjson.com/products/category/${selectedCatg}`)
        .then(res => {
          dispatch(setProduct(res.data.products));
        })
        .catch(error => {
          console.error("Error fetching filtered products:", error);
        });
    }
  }, [selectedCatg, dispatch]);
  console.log("Selected Category:", selectedCatg);
  console.log("Filtered Product List:", list);
  console.log(selectedCatg)

  return (
    <div>
    
      {list.map(item => (
        <div className="col-md-4" key={item.id}>
          <Cardpages item={item} />
        </div>
      ))}
    </div>
  );
}

export default Filterpro;
