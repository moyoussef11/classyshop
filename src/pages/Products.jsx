import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import CardProducts from "../components/products/CardProducts";
import { ProductContext } from "../context/ProductsProvider";
import Loading from "../components/loading/Loading";
import axios from "axios";

const Products = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const value = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const category = value.filterCats;

  // console.log(products);

  useEffect(() => {
    setProducts(value.products);
  }, [category]);

  // getProductsBy Category
  function getCat(category) {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => setProducts(res.data.products));
  }

  // Ui cat

  const showCats = category.map((cat, index) => (
    <li
      key={index}
      onClick={() => {
        setActiveIndex(index);
        getCat(cat);
      }}
      className={`p-2 capitalize hover:active ${
        activeIndex === index ? "active" : ""
      }`}
    >
      {cat}
    </li>
  ));
  return (
    <div id="products" className="relative">
      <div
        style={{ backgroundImage: `url(${"/src/assets/images/products.jpg"})` }}
        className="h-28 w-full bg-slate-400 text-center py-24 bg-fixed bg-center bg-cover relative"
      >
        <div className="sticky z-10 text-center">
          <h4 className="text-3xl font-bold">All Products</h4>
        </div>
        <div className="absolute w-full h-full top-0 bg-[#C4D5DE] opacity-70"></div>
      </div>
      {category.length == 0 ? (
        <Loading />
      ) : (
        <div className="main_paddingX py-10 flex flex-col md:flex-row">
          <div className="hidden md:block w-1/4 h-fit sticky top-0">
            <div className="Categories w-full">
              <div
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="flex items-center justify-between pr-10 cursor-pointer"
              >
                <h5 className="md:text-2xl font-bold">Categories</h5>
                {toggle ? <FaArrowDown /> : <FaArrowUp />}
              </div>
              {!toggle ? (
                <ul className="flex flex-col space-y-2 py-10">
                  <li
                    onClick={() => {
                      setActiveIndex("");
                      setProducts(value.products);
                    }}
                    className={`p-2 hover:active ${
                      activeIndex === "" ? "active" : ""
                    }`}
                  >
                    All
                  </li>
                  {showCats}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
{/* category in phone   */}
          <div className="h-fit md:hidden w-full main_paddingX py-2">
            <div className="Categories w-full">
              <div className="text-center">
                <h5 className="md:text-2xl font-bold">Categories</h5>
              </div>
              <ul className="flex text-sm flex-wrap space-x-3 space-y-3 items-center justify-center">
                <li
                  onClick={() => {
                    setActiveIndex("");
                    setProducts(value.products);
                  }}
                  className={`p-2 hover:active ${
                    activeIndex === "" ? "active" : ""
                  }`}
                >
                  All
                </li>
                {showCats}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-3/4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <CardProducts products={products} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
