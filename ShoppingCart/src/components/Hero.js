import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Nav from "./Nav";
import Container from "./reuasablecomponents/Container";
import CardContainer from "./CardContainer";
import ShoppingCartContainer from "./ShoppingCartContainer";
import { set } from "mongoose";

const Hero =()=> {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems,setCartItems] = useState([]);
    const [itemCount,setItemCount] = useState(0);
    const [hiddenMenu,setHiddenMenu] = useState(false);

 
      const updateCart = (shoeImg,shoePrice)=>{
      setItemCount(prevCount => prevCount + 1);
      setTotalPrice(prevPrice => prevPrice + shoePrice);
      if(cartItems.find((item)=>item.img === shoeImg));
      const result = cartItems.find((item)=>item.img === shoeImg);
      result.count++;
      return;

       setCartItems([...cartItems,
        {img:shoeImg , price :shoePrice ,id :uuidv4(), cartCount: 1},
    ]);
    }
  

    return(
        <section className="hero">
         <Nav />
         <Container>
             <CardContainer />
             <ShoppingCartContainer  
             hiddenMenu={hiddenMenu}
             cartItems ={cartItems}
             itemCount={itemCount}
             totalPrice={totalPrice}/>
         </Container>
        </section>
    )
}

export default Hero;