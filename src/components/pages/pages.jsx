import React, { useState } from "react";
import Navbar from "./Navbar";

import Cardpages from "./card";
import Cart from "./cart";
import { Sliderapp } from "../extras/slider";
import { Homepage } from "./homepages";


export function Intropages(){
    const [show,setShow]=useState([true])
    const [cart,setCart]=useState([])
    return(
        <>
    
    
    <Homepage/>
        </>
    

    )
}