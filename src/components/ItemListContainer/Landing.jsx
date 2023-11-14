import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../image/blazer (1).png";
import ItemList from "./Item";
import ItemListContainer from "./ItemListContainer";
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

    // getDocs(queryCollection).then((res) => {
    //   let productos = res.docs.map((product) => ({
    //     id: product.id,
    //     ...product.data(),
    //   }));
    //   if (id) {
    //     setData(
    //       productos.filter((producto) => {
    //         return producto.categoryId == id;
    //       })
    //     );
    //   } else {
    //     setData(productos);
    //   }
    // });
  }, [id]);

  return (
    <div className="pagina">
      <div className="contenedor-inicio">
        <div className="contenido-inicio">
          <h1>Sneakers Shop</h1>
          <a href="#bajar" className="boton">Comprar Ahora</a>
        </div>
        <img src={image} alt="" />
        <div className="triangulo"></div>
        <div className="circulo"></div>
        <div className="circulo-2"></div>
      </div>
       
        <ItemListContainer > </ItemListContainer>
    
          
      <div id="bajar" className="eleccion">
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
