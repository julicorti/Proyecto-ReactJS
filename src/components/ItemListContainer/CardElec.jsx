import { useParams } from "react-router-dom";
const CardE = (props) =>{
    const { name } = useParams();
    return(
        <div className="cardElec">
                 <h1 >{props.name}</h1>

           
        </div>


    );
}
export default CardE;