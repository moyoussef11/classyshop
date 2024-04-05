import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);

  const Cats = products.map((item) => {
    return item.category;
  });

  let filterCats = Cats.filter((el, index, array) => {
    return array.indexOf(el) === index;
  });


  return (
    <ProductContext.Provider value={{ products, filterCats }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
