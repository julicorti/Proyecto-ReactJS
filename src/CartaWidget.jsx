import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAndroid} from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function CartaWidget (){
    return(
        <div className='carrito' style={{fontSize:"2em", background:"grey", padding: "6px",borderRadius: "50px"}}>
        9<FontAwesomeIcon icon= {faShoppingCart} />
        </div>
    )
}
export default CartaWidget ;