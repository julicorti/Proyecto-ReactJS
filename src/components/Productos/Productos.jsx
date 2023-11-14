import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Product from "./Product";
const Prods = () => {
  const collectionOrders = "orders";
  const { getProducts, getTotal, cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  

  const actionBuy = () => {
    navigate("/formulario")
  };
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setTotal(getTotal());
    setProducts(getProducts());

    return () => {};
  }, [cart]);

  return (
    <div className="productos">
      <div className="contenedorProds">
        {products.map((p) => {
          return <Product id={p.id} name={p.name} cant={p.cant}></Product>;
        })}

        <span className="Total">TOTAL: {total}$</span>

        <button className="btnComprar" onClick={actionBuy}>
          Comprar
        </button>
        <button id="vaciar" onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Prods;
