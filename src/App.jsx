import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Boton from "./components/Boton/ItemCount";
import Detalle from "./components/Vista/Detalle";
import ProductDetail from "./components/page/ProductDetail";
import CartContext from "./context/CartContext";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (id) => {
    console.log(id)

    let borradoUno = false;
    let filtro = []
    cart.map((i) => {
      if(i.id!==id || (borradoUno && i.id===id)){
        filtro.push(i)
      }else if(i.id===id){
        borradoUno = true
      }
    });
    setCart(filtro);

  };

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, setCart }}>
      <BrowserRouter>
        <NavBar />
        <ProductDetail/>
        {/* <Carta/> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/detail/:id" element={<Detalle />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    
  );
}

export default App;
