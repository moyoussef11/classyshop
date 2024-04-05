import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
const InputSearch = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // get products by search value

  function getProducts() {
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => setProducts(res.data.products));
  }

  //   // handle click btn
  const handle = (e) => {
    e.preventDefault();
    if (search !== "") {
      getProducts();
    }
  };

  const closeSearch = () => {
    setProducts([]);
  };

  // Ui card
  const showProducts = products.map((item) => (
    <div
      key={item.id}
      className="flex justify-between items-center flex-row-reverse mb-5 bg-slate-200 rounded"
    >
      <img
        src={item.thumbnail}
        className=" w-52 h-52 rounded"
        alt={item.title}
      />
      <div className=" capitalize flex flex-col space-y-10">
        <h3 className="font-bold ml-2">{item.title}</h3>
        <Link
          to={`/products/${item.id}`}
          onClick={closeSearch}
          className="main_btn w-fit"
        >
          details
        </Link>
      </div>
    </div>
  ));

  return (
    <form className="w-1/2 hidden md:flex justify-between relative">
      <input
        type="text"
        placeholder="search products here..."
        className="flex-1 border-[#bebebe] border-2 focus:border-[#408A9E] outline-none rounded p-2"
        name={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="main_btn" onClick={handle}>
        search
      </button>
      {products.length <= 0 ? (
        ""
      ) : (
        <div className="absolute z-30 left-0 right-0 top-11 bg-[#B9D4DC] p-4 rounded-lg">
          <MdOutlineClose
            size={30}
            onClick={closeSearch}
            className=" absolute right-0 top-0 bg-white rounded-full text-red-600 cursor-pointer"
          />
          {showProducts}
        </div>
      )}
    </form>
  );
};

export default InputSearch;
