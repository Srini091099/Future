// Filtercategory.jsx

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatg, setselectedCatg } from '../../redux/reducer';
import '../filterpage/filtercategory.css'

function Filtercategory() {
  const { selectcatg, catg } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  function handleSelection(arg) {
    dispatch(setselectedCatg(arg));
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((res) => dispatch(setCatg(res.data)));
  }, [dispatch]);

  return (
    <div>
      <h5 className="filter_text">Filtercategory</h5>
      {catg.map((item) => (
        <div
          className=" filter_hover my-2 fs-6"
          style={{ cursor: 'pointer' }}
          onClick={() => handleSelection(item)}
          key={item}
        >
         
          {selectcatg === item ? (
            <div className="conatiner">
 <span className="col-md-4">{item}</span>
            </div>
           
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Filtercategory;
