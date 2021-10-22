import React from "react";
import ShoppingCart from "./ShoppinCart";
import TotalPrice from "./TotalPrice";

const ShoppingCartContainer = ({props})=>{
    const [hiddenMenu,cartItems,totalPrice,itemCount] = props;
    return(
      
        <div className="shoppingCartContainer">
       <ShoppingCart cartItems ={cartItems}/>
       <TotalPrice totalPrice ={totalPrice} itemCount={itemCount}/>
        </div>
     
    )
}
export default ShoppingCartContainer