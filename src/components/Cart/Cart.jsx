import CartContext from "../../context/CartContext";
import "../SASS/style.css"
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

function Cart({ item }) {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  const [iguales, setIguales] = useState(1);

  const addStock = () => {
    addToCart(item);
    setIguales(iguales+1)
  };
  const removeStock = () => {
    removeFromCart(item.id);
    setIguales(iguales-1)
    
  };

  useEffect(() => {
    return () => {
      let coincidencias = 0
      cart.map(i=>{
        if(i.id===item.id){
          coincidencias++
        }
      })
      setIguales(coincidencias)

    };
  }, []);
  return (
    <div className="col s4 ">
      {!item.cartView ? (
        <Link to={`/producto/${item.id}`}>
          <div className="cartItem">
            <img src={item.image} alt="" />
            <h6>{item.title}</h6>
          </div>
        </Link>
      ) : iguales<=0? '': (
        <div className="cardItemComponentCart">
          <Link to={`/producto/${item.id}`}>
            <div className="cardItemComponentCartContent">
              <img src={item.image} alt="" />
              <h6>{item.title}</h6>
            </div>
          </Link>
          <div className="addCountItemComponentCart">
            <button onClick={removeStock}>-</button>
            <span>{iguales}</span>
            <button onClick={addStock}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;