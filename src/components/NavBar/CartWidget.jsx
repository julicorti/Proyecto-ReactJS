import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAndroid} from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function CartWidget (){
    return(
        <div className='carrito' style={{fontSize:"30px",  padding: "6px"}}>
        9<FontAwesomeIcon icon= {faShoppingCart} />
        </div>
    )
}
export default CartWidget ;