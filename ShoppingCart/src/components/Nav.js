import React from "react";
import Container from"./reuasablecomponents/Container";

const Nav = ({hiddenMenu,setHiddenMenu,itemCount}) =>{
    return(
       <nav>
           <Container>
               <h2>Shoes</h2>
               <div className="menuWrapper"onClick={()=>setHiddenMenu(!hiddenMenu)}></div>
           </Container>
       </nav>
    )
}

export default Nav;