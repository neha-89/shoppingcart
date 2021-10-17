import React from "react";
import CardBg from "./CardBg";
import CardInfo from "./CardInfo";
import ShoeData from "./ShoeData";
const Card = ()=>{
    return(
       <>
       {ShoeData.map((shoe,index) =>(
           <div key={index} className="card">
               <CardBg shoeImg={shoe.cardImg} />
               <CardInfo shoePrice={shoe.cardPrice} />
           </div> 
       ))}
      
       </>
    )
}

export default Card;
