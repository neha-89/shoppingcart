import React from "react";
import ShoppingCart from "./ShoppinCart";

const ShoppingCartContainer = ({props})=>{
    const [hiddenMenu,cartItems,totalPrice,itemCount] = props;
    return(
      
        <div className="shoppingCartContainer">
       <ShoppingCart cartItems ={cartItems}/>
        </div>
     
    )
}
export default ShoppingCartContainer