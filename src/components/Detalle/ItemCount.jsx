import { useEffect, useState } from "react";

const Boton = (props) => {
  
  const sumar = () => {
    props.setCount(props.count + 1 <= props.stock ? props.count + 1 : props.count);
  };
  const restar = () => {
    props.setCount(props.count>0?props.count - 1:0);
  
  };
  return (
    <div style={{ 
      
        marginTop: 40,
        border:  '2px solid grey', 
        height: 40, 
        width:260,
        display: "flex",
       textAlign: "center",
        gap: 80,
        justifyContent: "center",
        alignItems: "center"

        }}>
      
      <button style={{ fontSize: 25 ,outline:"none" ,border: "none", backgroundColor: "white",width: 30, height: 30, display: "flex", justifyContent: "center",alignItems: "center"}} onClick={sumar}>+</button>
      <span style={{fontSize: 25}}>{props.count}</span>
      <button style={{fontSize: 30 , outline:"none" ,border: "none",backgroundColor: "white",width: 30, height: 30, display: "flex", alignItems: "center"}} onClick={restar}>-</button>
    </div>
  );
};
export default Boton;
