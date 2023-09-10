import React from "react";
import CartaWidget from "../CartaWidget";
const NavBar = () => {
  return (
    
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand mx-auto" href="#">
            <h1 style={{fontSize:50, textAlign: "center"}}>Sneakers Shop</h1>
              
            </a>
            <CartaWidget/>
            
          </div>
        </nav>
      </div>
    
  )
}
export default NavBar;
