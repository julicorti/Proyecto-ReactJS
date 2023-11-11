import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../image/blazer (1).png";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CardE from "./CardElec";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const Landing = ({ texto }) => {
  const [detail, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Products");

    getDocs(queryCollection).then((res) => {
      let productos = res.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      if (id) {
        setData(
          productos.filter((producto) => {
            return producto.categoryId == id;
          })
        );
      } else {
        setData(productos);
      }
    });
  }, [id]);

  return (
    <div className="pagina">
      <div className="contenedor-inicio">
        <div className="contenido-inicio">
          <h1>Sneakers Shop</h1>
          <button className="boton">Comprar Ahora</button>
        </div>
        <img src={image} alt="" />
        <div className="triangulo"></div>
        <div className="circulo"></div>
        <div className="circulo-2"></div>
      </div>
        <div className="contenedor">
          <h3>Productos</h3>
        <div className="contenedor-prod">
       

   
          {detail.length > 0
            ? detail.map((e) => {
                return (
                  <ItemList
                    image={e.image}
                    id={e.id}
                    name={e.name}
                    stock={e.stock}
                  />
                );
              })
            : "No hay Stock"}
        </div>
      </div>
      <div className="eleccion">
              <h5>Selecciona la Opcion que desee</h5>
              <div className="cartasE">
              <Link to="/category/0"><CardE name="Mujer"/></Link>
              <Link  to="/category/1"><CardE  name="Hombre"/></Link>
              </div>
      </div>
    </div>
  );
};
export default Landing;
