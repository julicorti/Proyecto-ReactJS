import React, { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../../context/CartContext";
const Product = (props) => {
    const {cart ,setCart} = useContext(CartContext)


    const removeItem = ()=>{
        let borradoUno = false;
        let filtro = []
        cart.map((i) => {
          if(i.id!==props.id || (borradoUno && i.id===props.id)){
            filtro.push(i)
          }else if(i.id===props.id){
            borradoUno = true
          }
        });
        setCart(filtro);
    }

  return (
    <div>
      Nombre: {props.name}
      -Cantidad: x{props.cant}
      <button id="remove" onClick={removeItem}>X</button>

    </div>
  );
};

export default Product;
