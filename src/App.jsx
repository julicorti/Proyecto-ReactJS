import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Boton from "./components/Detalle/ItemCount";
import Detalle from "./components/Detalle/Detalle";
import Landing from "./components/ItemListContainer/Landing";
import CartView from "./components/Cart/CartView";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import Formulario from "./components/Checkout/Formulario";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        {/* <Carta/> */}
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/detail/:id" element={<Detalle />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/Checkout/:id" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
