import React, { useContext, useEffect, useMemo, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
const Prods = () => {
    const collectionOrders = "orders";
    const {getProducts,getTotal ,cart ,setCart} = useContext(CartContext);
    const navigate = useNavigate();
  
  
    const _order = useMemo(() => {
      const items = cart;
      const date = new Date().toLocaleDateString("es-AR");
      return { items, date };
    }, [cart]);
  
    const actionBuy = () => {
      const db = getFirestore();
      const orderCollection = collection(db, collectionOrders);
      addDoc(orderCollection, _order).then(({ id }) => {
   
        setCart([])
         navigate(`/Checkout/${id}`) 
      });
    }; 
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
 
    useEffect(() => {
      setTotal(getTotal())
      setProducts(getProducts())

      return () => {
      }
    }, [])
    
    return (
      <div className="productos" >
      
        <div className="contenedorProds">
       
      {products.map(p =>{
          return (
            <>
          <div>
              Nombre: {p.name } 
             -Cantidad: x{p.cant}
            
             
            </div>
            </>
          )
     
        })} 
      
          
        
        <span className="Total">TOTAL: {total}$</span>
        
       <button className="btnComprar" onClick={actionBuy}>Comprar</button> 
        </div>
   
      </div>
      
    );
  };
  
  export default Prods;