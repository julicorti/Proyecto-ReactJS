import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";
import "../SASS/style.css";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
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
    <div className="filtro-vista">
      <h3>Productos </h3>
      <div className="filtro-cards">
        <ItemList productos={detail}/>
      </div>
    </div>
  );
};
export default ItemListContainer;
