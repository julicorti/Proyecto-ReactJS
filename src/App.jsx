import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import Boton from './components/Boton/ItemCount';
import Detalle from './components/Vista/Detalle';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  
  return (
    <BrowserRouter>
     <NavBar/>
    {/* <Carta/> */}
    <Routes>

        <Route path="/" element={<ItemListContainer/>} />

        <Route path="/detail/:id" element={<Detalle/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
       
    </Routes>
  </BrowserRouter>
  
  ); 
}

export default App;
