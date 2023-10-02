
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Boton from "../Boton/ItemCount";
import image from "../image/vansK.webp";
function Detalle() {
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
        marginTop: "50px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
        width: 300,
        borderRadius: 6,
        background: "white",
        boxShadow: "0 0 5px grey",
      }}
    >
     
      <div style={{ height: 200, width: 200, border: "solid grey",
            borderRadius: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img
          src={image}
          style={{
            
            height: 350,
            width: 200,
          }}
          
        />
        
      </div>

      <Boton/>
    </div>
    </div>
  );
};
export default Detalle;
