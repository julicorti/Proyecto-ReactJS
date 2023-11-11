import { Link } from "react-router-dom";
import "../SASS/style.css"
import { useParams } from "react-router-dom";
const Item = (props) =>{
    const { id } = useParams();
    return(
        <div className="detalleBtn">
                 <h1>Ver detalles</h1>
                </div>


    );
}
export default Item;