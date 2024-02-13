import React, { useEffect, useState } from 'react';
import Singleproductpage from './singleproductpage';
import { useParams } from 'react-router-dom';

function Productpage({ handleClick }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(`Error fetching product with id '${id}':`, error));
  }, [id]); 

  console.log(product);

  return (
    <>
      {product && <Singleproductpage item={product} handleClick={handleClick} />}
    </>
  );
}

export default Productpage;
