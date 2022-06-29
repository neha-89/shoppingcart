import React from "react";
import Button from "./reuasablecomponents/Button";

const CardInfo = ({shoePrice,updateCart})=>{
    return(
        <div className="cardInfo">
          <p>${shoePrice}</p> 
          <Button addItem={updateCart} />
        </div>
    )
}
export default CardInfo;
