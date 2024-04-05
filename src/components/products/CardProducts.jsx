import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../../RTK/slices/cartSlice";

const CardProducts = ({ products }) => {
  const dispatch = useDispatch();
  

  // UI products
  const showData = products.map((product) => (
    <div
      key={product.id}
      className="card bg-slate-100 p-2 rounded-lg border-[#408A9E] border-r-2 hover:scale-105 transition-all duration-500 hover:border-l-2 hover:border-r-0"
    >
      <div className="relative">
        <img
          src={product.thumbnail}
          className=" w-full h-40 object-contain"
          alt={product.title}
        />
        <Link to="/">
          <div className="group">
            <CiShoppingCart
              size={30}
              className="cursor-pointer absolute top-0 hover:main_color bg-white rounded-full p-1"
            />
            <span onClick={()=>dispatch(addToCart(product))} className="absolute left-0 top-6 bg-slate-200 p-1 hidden group-hover:block rounded capitalize text-[#408A9E] cursor-pointer text-sm transition-all duration-300">
              add to cart
            </span>
          </div>
        </Link>
        <span className="absolute top-0 right-0 text-sm font-bold bg-white p-1 rounded-lg text-[#408A9E] capitalize">
          {product.category}
        </span>
      </div>
      <div className="flex flex-col space-y-5 text-center sm:text-left">
        <h6 className=" text-2xl font-semibold capitalize text-[#408A9E]">
          {product.title.substring(0, 15)}
        </h6>
        <p className="text-sm text-gray-500">
          {product.description.substring(0, 60)}....
        </p>
        <div className="flex flex-col justify-center space-y-1 relative">
          <span className="font-bold w-fit rounded-lg p-1 mx-auto sm:mx-0">
            Price:${product.price}
          </span>
          <span className="border-green-500 text-green-600 border-2 w-fit text-sm p-1 absolute right-0">
            -{product.discountPercentage}%
          </span>
        </div>
        <Link to={`/products/${product.id}`}>
          <button className="main_btn ml-0">showDetails</button>
        </Link>
      </div>
    </div>
  ));
  return <>{showData}</>;
};

export default CardProducts;
