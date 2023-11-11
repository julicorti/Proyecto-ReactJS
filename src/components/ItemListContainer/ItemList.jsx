import { useParams } from "react-router-dom"
import "../SASS/style.css";
import { Link } from "react-router-dom";
import Item from "./Item";
const ItemList = (props) =>{
    const { id, name, categoryId, image, stock} = useParams();
    return(

        <div className="caja-detalle">
    
        <h1>
         {props.name}
         
        </h1>

        <img
         
          src={props.image}
          alt=""
        />
        <div className="contenido">
        <Link style={{textDecoration: "none"}} to={`/detail/${props.id}`}><Item /></Link>
      <h2>Stock: {props.stock}</h2>
      </div>
</div>


    );
}
export default ItemList;