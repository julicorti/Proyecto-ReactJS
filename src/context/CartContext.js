import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getTotal = () => {
    let total = 0;
    cart.map((p) => {
      total += Number(p.price);
    });
    return total;
  };
  const hasID = (i, arr) => {
    let status = false;
    arr.map((p) => {
      if (p.id == i.id) {
        status = true;
      }
    });
    return status;
  };
  const findIndex = (i, arr) => {
    let indx = -1;
    arr.map((p, index) => {
      if (p.id == i.id) {
        indx = index;
      }
    });
    return indx;
  };
  const getProducts = () => {
    let products = [];
    cart.map((p) => {
      p = JSON.parse(JSON.stringify(p));
      if (hasID(p, products)) {
        products[findIndex(p, products)].cant += 1;
      } else {
        p.cant = 1;
        products.push(p);
      }
    });
    return products;
  };

  const addToCart = (item) => {
    setCart([...cart, ...item]);
  };
  const removeFromCart = (id) => {
    console.log(id);

    let borradoUno = false;
    let filtro = [];
    cart.map((i) => {
      if (i.id !== id || (borradoUno && i.id === id)) {
        filtro.push(i);
      } else if (i.id === id) {
        borradoUno = true;
      }
    });
    setCart(filtro);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        findIndex,
        getProducts,
        getTotal,
        hasID,
        removeFromCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
