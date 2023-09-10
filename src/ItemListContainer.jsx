import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
const ItemListContainer = (props) => {
  return (
    <div className="pagina" style={{height:"90.2vh", width: "100vw", alignItems:"center",justifyContent: "center", display:"flex", background: "#F5F5F5"}}>
    <div
      className="contenedor"
      style={{
        marginTop: "50px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 350,
        borderRadius: 6,
        background: "grey",
        boxShadow: "0 0 5px black",
      }}
    >
      <div
        id="texto"
        style={{ fontSize: 30, textAlign: "center", color: "white" }}
      >
        {props.texto}
      </div>
    </div>
</div>
  );
};
export default ItemListContainer;
