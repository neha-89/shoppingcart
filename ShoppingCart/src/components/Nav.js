import React from "react";
import Container from"./reuasablecomponents/Container";

const Nav = ({hiddenMenu,setHiddenMenu,itemCount}) =>{
    return(
       <nav>
           <Container>
               <h2>Shoes</h2>
               <div className="menuWrapper"onClick={()=>setHiddenMenu(!hiddenMenu)}></div>
               <i className={hiddenmenu? "fas fa-times fa-lg":"fas fa-shopping-cart fa-lg"}></i>
               <p>{itemCount > 0 && itemCount}</p>
           </Container>
       </nav>
    )
}

export default Nav;