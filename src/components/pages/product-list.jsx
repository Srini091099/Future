import React from 'react';
import { useSelector } from 'react-redux';

function Productlist() {
    const list=useSelector((state)=>state);
    state.Products.list.filter((item,idx)=>idx>8)
    console.log(list)
    return (
        <div>
            
        </div>
    );
}

export default Product-list;