import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CartContext} from '../../context/CartContext';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
 import { useContext } from 'react';
import Boton from '../Detalle/ItemCount';
import { Link } from 'react-router-dom';
function CartWidget (){
  const {cart} = useContext(CartContext);
    return(
        <div className='carrito' >
       <Link  className='cart' to="/cart"><span className='numero'>{cart.length}</span><FontAwesomeIcon  icon= {faShoppingCart} /></Link>
    
        {/* <button onClick={() => miContext.CartWidget}>cambiar estado</button> */}
        </div>
    )
}
export default CartWidget ;