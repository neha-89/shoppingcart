import React from "react";


const ShoppingCart = ({cartItems})=>{
    return(
        <div className="shoppingCart">
         {cartItems.map((item)=>{
             <div className="cardRow" key={item.id}>
                 <div className = "cardImg">
             <p>x{item.cartCount}</p>
             <img src={item.img} alt="shoe"/>
             </div>
             <div className="carPrice">
                 <p>{item.price}$</p>
                 </div>
                 </div>
         })}
        </div>
    )
}

export default ShoppingCart;