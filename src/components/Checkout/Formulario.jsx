import { useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Product from "../Productos/Product";
import { useContext, useMemo, useState } from "react";
const Formulario = () => {
  const collectionOrders = "orders";
  const db = getFirestore();
  const orderCollection = collection(db, collectionOrders);
  const { getProducts, getTotal, cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [tel, setTel] = useState("");

  const _order = useMemo(() => {
    const items = cart;
    const customer = {name,gmail,tel}
    const date = new Date().toLocaleDateString("es-AR");
    return { items, customer, date };
  }, [cart, name, gmail, tel]);

  const actionBuy = () => {
    getProducts().map(async (p) => {
      const docSnap = await getDoc(doc(db, "Products", p.id));
      let product;
      if (docSnap.exists()) {
        product = docSnap.data();
        product.stock = product.stock - p.cant;
      }
      await setDoc(doc(db, "Products", p.id), product);
    });
    addDoc(orderCollection, _order).then(({ id }) => {
      setCart([]);
      navigate(`/Checkout/${id}`);
    });
  };

  const onName = (e) => {
    setName(e.target.value);
  };
  const onGmail = (e) => {
    setGmail(e.target.value);
  };
  const onTel = (e) => {
    setTel(e.target.value);
  };

  return (
    <div className="cont-detail">
     
    <div className="detalle-compra">
    <h1>Ingrese Sus Datos</h1>
      <input
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
        onChange={onName}
      />
      <input
        type="text"
        name="gmail"
        placeholder="Ingrese su correo"
        onChange={onGmail}
      />
      <input
        type="text"
        name="tel"
        placeholder="Ingrese su telefono"
        onChange={onTel}
      />
      <button id="finalizar" onClick={actionBuy}>Finalizar Compra</button>
    </div>
    </div>
  );
};
export default Formulario;
