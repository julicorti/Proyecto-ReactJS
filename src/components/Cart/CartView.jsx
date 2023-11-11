import CartContext from "../../context/CartContext";
import ItemDetail from "../Detalle/ItemDetail";
import React, { useContext, useEffect, useState } from "react";
import Prods from "../Productos/Productos";
function CartView() {
  const { cart } = useContext(CartContext);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    return () => {
      let ids = [];
      let newProducts = [];
      cart.map((i) => {
        if (ids.includes(i.id)) {
          return;
        } else {
          newProducts.push(i);
          ids.push(i.id);
        }
      });
      setProductos(newProducts);
    };
  }, []);

  return (
    <>
    
      <div className="cartView">
       
        <div className="container">
      {/*     <div className="row">
            {productos
              ? productos.map((e) => {
                  e.cartView = true;
                  return <ItemDetail item={e} />;
                })
              : "loading"}
          </div> */}
        </div>
      </div>
      {cart.length > 0 ? <Prods></Prods> : "No hay nada agregado"}
    </>
  );
}

export default CartView;
