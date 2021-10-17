import React from "react";
import Container from"./reuasablecomponents/Container";

const Nav = () =>{
    return(
       <nav>
           <Container>
               <h2>Shoes</h2>
               <div className="menuWrapper"></div>
           </Container>
       </nav>
    )
}

export default Nav;