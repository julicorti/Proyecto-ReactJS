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
const ItemListContainer = (props) => {
  const [detail, setData] = useState([...props.productos]);
  useEffect(() => {
    setData(props.productos);
  }, [props.productos]);

  return (
    <>
      {detail.length > 0
        ? detail.map((e) => {
            return (
              <Item image={e.image} id={e.id} name={e.name} stock={e.stock} />
            );
          })
        : "No hay Stock"}
    </>
  );
};
export default ItemListContainer;
