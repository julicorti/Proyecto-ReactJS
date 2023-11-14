import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import Brief from "./Brief";
const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [detail, setData] = useState([]);
  let { id } = useParams();

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

  const getProducts = (ps) => {
    let products = [];
    ps.map((p) => {
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

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "orders");

    getDocs(queryCollection).then((res) => {
      let orders = res.docs.map((order) => ({
        id: order.id,
        ...order.data(),
      }));
      if (id) {
        let order = orders.filter((order) => {
          return order.id == id;
        });
        order = order[0];
        order.items = getProducts(order.items);
        console.log(order);
        setData(order);
      } else {
        setData(getProducts(orders));
      }
    });

    const query = getFirestore();
    const queryCollec = collection(query, "Products");
    getDocs(queryCollec).then((res) => {
      let productos = res.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      setProducts(getProducts(productos));
    });
  }, [id]);

  return (
    <div className="detalle-compra">
      <h1>Detalle de compra </h1>

      <Brief detail ={detail}/>
    </div>
  );
};
export default Checkout;
