import React, { useState } from "react";
import CartWidget from "./CartWidget";

import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  /* const [prueba, setPrueba] = useState(0); */
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ width: "100%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="#">
            <h1 style={{ fontSize: 30, textAlign: "center" }}>Sneakers Shop</h1>
          </a>
          {/*  {prueba}
            <button style={{width: 30, height: 40}} onClick={()=> setPrueba(prueba + 1)}>+</button> */}
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <li style={{ listStyleType: "none", display: "flex", gap: "15px"}}>
              <NavLink
                style={{ textDecoration: "none", listStyleType: "none" }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", listStyleType: "none" }}
                to="/category/0"
              >
                Tecnolgia
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", listStyleType: "none" }}
                to="/category/1"
              >
                Accesorios
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", listStyleType: "none" }}
                to="/category/2"
              >
                Ropa Hombres
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", listStyleType: "none" }}
                to="/category/3"
              >
                Ropa Mujeres
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
