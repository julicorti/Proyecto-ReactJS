import React, { useState } from "react";
import CartWidget from "./CartWidget";

import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
/* const [prueba, setPrueba] = useState(0); */
  return (
    
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand mx-auto" href="#">
            <h1 style={{fontSize:30, textAlign: "center"}}>Sneakers Shop</h1>
              
            </a>
           {/*  {prueba}
            <button style={{width: 30, height: 40}} onClick={()=> setPrueba(prueba + 1)}>+</button> */}
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/detail">Detalle</NavLink>
              </li>
              
            </ul>
            <CartWidget/>
           
          </div>
        </nav>
      </div>
    
  )
}
export default NavBar;
