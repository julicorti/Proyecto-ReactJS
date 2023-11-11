import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";
const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [detail, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "orders");

    getDocs(queryCollection).then((res) => {
      let orders = res.docs.map((order) => ({
        id: order.id,
        ...order.data(),
      }));
      if (id) {
        setData(
          orders.filter((order) => {
            return order.id == id;
          })
        );
      } else {
        setData(orders);
      }
    });

    const query = getFirestore();
    const queryCollec = collection(query, "Products");
    getDocs(queryCollec).then((res) => {
      let productos = res.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      setProducts(productos);
      console.log(detail);
      /* if (id) {
        setData(
          productos.filter((producto) => {
            return producto.categoryId == id;
          })
        );
      } else {
        setProducts(productos);
      } */
    });
  }, [id]);

  return (
    <div className="detalle-compra">
      <h1>Detalle de compra </h1>

      <div className="caja-detalle">
        <div className="contenido-detalle">
          {detail[0]
            ? detail[0].items.map((o) => {
                return <>Nombre: {o.name} <br /></>;
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
export default Checkout;
