import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Boton from "./components/Detalle/ItemCount";
import Detalle from "./components/Detalle/Detalle";
import Landing from "./components/ItemListContainer/Landing";
import CartContext from "./context/CartContext";
import CartView from "./components/Cart/CartView";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
function App() {
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
    setCart([...cart, ...item])
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
        getProducts,
        getTotal,
        addToCart,
        cart,
        removeFromCart,
        setCart,
      }}
    >
      <BrowserRouter>
        <NavBar />

        {/* <Carta/> */}
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/detail/:id" element={<Detalle />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/Checkout/:id" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
