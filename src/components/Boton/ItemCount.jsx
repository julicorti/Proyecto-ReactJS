import { useEffect, useState } from "react";

const Boton = () => {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  
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
      <h1 style={{fontSize: 25}}>{count}</h1>
      <button style={{fontSize: 30 , outline:"none" ,border: "none",backgroundColor: "white",width: 30, height: 30, display: "flex", alignItems: "center"}} onClick={restar}>-</button>
    </div>
  );
};
export default Boton;
