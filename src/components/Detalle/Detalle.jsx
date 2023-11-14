import Boton from "./ItemCount";
import image from "../image/vansK.webp";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
function Detalle() {
  const [data, setData] = useState({});
  let { id } = useParams();
  useEffect(() => {

      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'Products', id)
      getDoc(queryDoc)
      .then(res => setData({id: res.id, ...res.data()}))
  }, []);
  return (
    <>
    
  
      
       <ItemDetail stock={data.stock} id={data.id} name={data.name} image={data.image} price={data.price} description={data.description}/>
   
       </>
   
   
  );
}
export default Detalle;
