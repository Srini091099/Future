// Homepage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import List from "../../data";

import '../style/hompage.module.css';

import { Sliderapp } from "../extras/slider";
import categories_1 from '../asset/categories_1.png';
import categories_2 from '../asset/categories_2.png';
import categories_3 from '../asset/categories_3.png';

import { Categorypage } from "./categorypage";
import Hompageproduct from "../extras/homepage/hompageproduct";

import Productindex from "./filterpa";
import Productmenindex from './filterpa/productmenindex'
import UpwardNavbar from "./navbar2";


export function Homepage({ handleClick }) { 

  return (
    <>
     
      <div
        data-spy="scroll"
        data-target="#list-example"
        data-offset={0}
        className="scrollspy-example"
      >
        <UpwardNavbar/>
        <Sliderapp />
        <Hompageproduct products={List.item} handleClick={handleClick} />
        
        <div className="container">
          <h5 className="heading" id='item-1'>for your finds</h5>
          <div className="row mt-3">
            <div className="col-md-4">
              <Link to='/mens'>
                <Productmenindex products={List.item} handleClick={handleClick} image={categories_2} />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to='/women'>
                <Productindex products={List.item} handleClick={handleClick} image={categories_1} />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to='/Filter'><Categorypage image={categories_3} handleClick={handleClick}
              label="mens" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
