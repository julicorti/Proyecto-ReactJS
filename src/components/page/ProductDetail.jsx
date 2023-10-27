import { useEffect, useState } from "react";
import { Products } from "../../Firebase/firebase.config";
const ProductDetail = () => {
  const [ProductsS, setProducts] = useState([]);
  useEffect(() => {
    Products.getProduct().then((data) => setProducts(data));
}, []);

    console.log(ProductsS);
  return (
    <h1>
      Products detail
      {ProductsS.name}
    </h1>
  );
};
export default ProductDetail;
