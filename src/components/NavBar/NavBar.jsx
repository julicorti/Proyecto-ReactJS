import React, { useState } from "react";
import CartWidget from "./CartWidget";

import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  /* const [prueba, setPrueba] = useState(0); */
  return (
    <div
      className="container"
  
    >
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ width: "100%" }}
      >
        <div className="container-fluid">
         
          {/*  {prueba}
            <button style={{width: 30, height: 40}} onClick={()=> setPrueba(prueba + 1)}>+</button> */}
          <ul
          
          >
            <li >
              <NavLink
                
                to="/"
              >
                Home
              </NavLink>
              <NavLink
               
                to="/category/0"
              >
                Mujer
              </NavLink>
              <NavLink
              
                to="/category/1"
              >
                Hombre
              </NavLink>

          
             
            </li>
          </ul>
          <CartWidget />
         
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
