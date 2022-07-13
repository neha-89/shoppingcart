import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Nav from "./Nav";
import Container from "./reuasablecomponents/Container";
import CardContainer from "./CardContainer";
import ShoppingCartContainer from "./ShoppingCartContainer";


const Hero =()=> {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems,setCartItems] = useState([]);
    const [itemCount,setItemCount] = useState(0);
    const [hiddenMenu,setHiddenMenu] = useState(false);

 
      const updateCart = (shoeImg,shoePrice)=>{
      setItemCount((prevCount) => prevCount + 1);
      setTotalPrice((prevPrice) => prevPrice + shoePrice);
      if(cartItems.find((item)=>item.img === shoeImg)){
      const result = cartItems.find((item)=>item.img === shoeImg);
      result.cartCount++;
      return;
      }
      console.log("click")
       setCartItems([
        ...cartItems,
        {img:shoeImg , price :shoePrice ,id :uuidv4(), cartCount: 1},
    ]);
    };
   const removeItem = (id) => {
    const newItems = cartItems.filter(cartItem => cartItem.id !== id);
    setCartItems(newItems);

    const itemCountResult = newItems.reduce(
        (acc,val) => (acc +=  val.cartCount),0
    );
    setItemCount(itemCountResult);

    const priceResult =  newItems.reduce(
    (acc,val) => (acc += val.price * val.cartCount),0
    );
    setItemCount(priceResult);
   }

    return(
        <section className="hero">
         <Nav itemCount ={itemCount} hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} />
         <Container>
             <CardContainer updateCart={updateCart}/>
             <ShoppingCartContainer  
             hiddenMenu={hiddenMenu}
             cartItems ={cartItems}
             itemCount={itemCount}
             totalPrice={totalPrice}
             removeItem={removeItem}/>
         </Container>
        </section>
    )
}

export default Hero;