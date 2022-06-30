import React from "react";
import CartImg from "../img/cart.png";

const TotalPrice =({totalPrice , itemCount})=>{
 return(
     <div className="shoppingCartPrice">
      <h2>TotalPrice = ${totalPrice}</h2>
      <div className ="allCartItems" style={{background:`url("${CartImg}") no-repeat center/cover`}}>
      <div className ="itemAmoutWrap">
          <p>{itemCount}</p>
      </div>
      </div>
     </div>
 )   
}
export default TotalPrice;