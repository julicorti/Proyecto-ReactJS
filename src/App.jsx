import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Category from './components/Vista/Category';
import Boton from './components/Boton/ItemCount';
import Detalle from './components/Vista/Detalle';
import Carta from './components/Carta/carta';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  
  return (
    <BrowserRouter>
     <NavBar/>
    <Carta/>
    <Routes>
     
        <Route path="/" element={<ItemListContainer/>} />
{/*         <Route path="/category" element={<Category/>} /> */}
        <Route path="/detail" element={<Detalle/>} />
      
    </Routes>
  </BrowserRouter>
  
  ); 
}

export default App;
