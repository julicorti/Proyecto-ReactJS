import React from "react";
import { useState, useContext, useFirestore, useEffect } from "react";
import CartContext from "../../context/CartContext";

import "../SASS/style.css"
import { useParams } from "react-router-dom";
import Boton from "./ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = (props) => {
    const [product, setProduct] = useState([]);
    const { id, name, price, description, image } = useParams();
    const { addToCart } = useContext(CartContext);
    const [count, setCount] = useState(0);

    

    const addItem = () => {
        let array = []
        for(let i = 0; i<count; i++){
            array = [...array, props]
        }
        addToCart(array);
      };
   
  
      return(
   
        <div className="contenedor-detail">
   
            <div className="caja-detalle">
  
                <h2 >{props.name}</h2>
                <img src={props.image} alt="" />
                <h2 >${props.price}</h2>
                <p >{props.description}</p>
                <Boton count={count} setCount={setCount} />
                <div className="vYa">
                <Link style={{display:"flex",alignItems: "center",justifyContent:"center",width: "150px" ,textDecoration: "none", color: "black", border: "solid black",backgroundColor: "black" ,padding: "10px", borderRadius: "15px", color: "white"}} to="/">Volver</Link>
                <button className="agregarAlC" onClick={addItem}>Agregar al Carrito</button>
                </div>
            </div>
        </div>

    );






}

export default ItemDetail;