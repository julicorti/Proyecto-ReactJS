import Boton from "../Boton/ItemCount";
import image from "../image/vansK.webp";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Carta from "../ItemListContainer/ItemListContainer";
function Detalle() {
  const [detail, setDetail] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, []);
  return (
    /*   <div>
    <h1>Detalle</h1>
      <ItemListContainer />
      <Boton />
    </div> */
    <div
      className="pagina"
      style={{
        height: "90.2vh",
        width: "100vw",

        justifyContent: "center",
        display: "flex",
        background: "#F5F5F5",
      }}
    >
      <div
        className="contenedor"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "50px",
          flexDirection: "column",
          display: "flex",

          height: "700px",
          width: "500px",
          borderRadius: 6,
          background: "white",
          boxShadow: "0 0 5px grey",
        }}
      >
        <h1>{detail.id}</h1>
        <div
          style={{
            
            height: 300,
            width: 300,
            border: "solid grey",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ objectFit: "cover", height: "200px"}}
            src={detail.image}
            alt=""
          />
        </div>
        <p style={{textAlign: "center" ,fontSize: "13px" }}>{detail.description}</p>
        <Link style={{display:"flex",alignItems: "center",justifyContent:"center",width: "150px" ,textDecoration: "none", color: "black", border: "solid aliceblue",backgroundColor: "#62F0DB" ,padding: "10px", borderRadius: "15px"}} to="/">Volver</Link>
        <h2>{"$" + detail.price}</h2>
        <Boton />
        
      </div>
    </div>
  );
}
export default Detalle;
