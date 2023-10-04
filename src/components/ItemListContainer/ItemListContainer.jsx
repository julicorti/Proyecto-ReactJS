import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function ItemListContainer() {
  const [detail, setDetail] = useState({});
  let { id } = useParams();
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ] 
  useEffect(() => {
    fetch(!id? "https://fakestoreapi.com/products/" : "https://fakestoreapi.com/products/category/" + categories[id])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, [id]);
  return (
    <div
      className="pagina"
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        display: "flex",
        background: "#F5F5F5",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {detail.length > 0
        ? detail.map((e) => {
            return (
              <div
              key={e.id}
                className="contenedor"
                style={{
                  
                  marginTop: "10px",
                  flexDirection: "column",

                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "400px",
                  width: "300px",
                  borderRadius: 6,
                  background: "white",
                  boxShadow: "0 0 5px grey",
                }}
              >
                <h2>Id: {e.id}</h2>
                <h1 style={{ textAlign: "center", fontSize: "20px" }}>
                  Nombre: {e.title}
                </h1>

                <img style={{objectFit: "cover" ,width: "100px" }} src={e.image} alt="" />
                <div className="detalleBtn">
                  <Link to={`/detail/${e.id}`}
                    style={{
                      
                      textDecoration: "none",
                      color: "black",
                      marginTop: 30,
                      boxShadow: "0 0 5px grey",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      padding: "10px"
                    }}
                  >
                    Detalle del producto
                  </Link>
                </div>
                
              </div>
            );
          })
        : ""}
    </div>
  );
}
export default ItemListContainer;
