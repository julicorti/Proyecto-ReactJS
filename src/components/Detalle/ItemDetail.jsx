import React from "react";
import { useState, useContext, useFirestore, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

import "../SASS/style.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ItemDetail = (props) => {
  const [product, setProduct] = useState([]);
  const { id, name, price, description, image } = useParams();
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
    const [max,setMax] = useState(props.stock)
  useEffect(() => {
    setMax(props.stock)
  }, [props.stock]);

  const sumar = () => {
    setCount(
      count + 1 <= max ? count + 1 : count
    );
  };
  const restar = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const addItem = () => {
    let array = [];
    for (let i = 0; i < count; i++) {
      array = [...array, props];
    }
    setMax(max-count);
    setCount(0);
    addToCart(array);
  };

  return (
    <div className="contenedor-detail">
      <div className="caja-detalle">
        <h2>{props.name}</h2>
        <img src={props.image} alt="" />
        <h2>${props.price}</h2>
        <p>{props.description}</p>
        <div
          style={{
            marginTop: 40,
            border: "2px solid grey",
            height: 40,
            width: 260,
            display: "flex",
            textAlign: "center",
            gap: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              fontSize: 25,
              outline: "none",
              border: "none",
              backgroundColor: "white",
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={sumar}
          >
            +
          </button>
          <span style={{ fontSize: 25 }}>{count}</span>
          <button
            style={{
              fontSize: 30,
              outline: "none",
              border: "none",
              backgroundColor: "white",
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
            }}
            onClick={restar}
          >
            -
          </button>
        </div>
        <div className="vYa">
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              textDecoration: "none",
              color: "black",
              border: "solid black",
              backgroundColor: "black",
              padding: "10px",
              borderRadius: "15px",
              color: "white",
            }}
            to="/"
          >
            Volver
          </Link>
          <button className="agregarAlC" onClick={addItem}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
