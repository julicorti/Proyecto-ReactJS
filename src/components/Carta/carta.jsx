import React, { useEffect, useState } from "react";

function Carta() {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, []);
  return (
    <div
      className="pagina"
      style={{
        height: "100vh",
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
                className="contenedor"
                style={{
                  marginTop: "10px",
                  flexDirection: "column",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "350px",
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
                  <button
                    style={{
                      marginTop: 30,
                      boxShadow: "0 0 5px grey",
                      border: "1px solid grey",
                      borderRadius: "5px",
                    }}
                  >
                    Detalle del producto
                  </button>
                </div>
                
              </div>
            );
          })
        : ""}
    </div>
  );
}
export default Carta;
