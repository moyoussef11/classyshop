import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../RTK/slices/cartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  // get product
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="main_btn w-full"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <Link to="/">
                    <button className="main_btn w-full">Back to home</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Price:</span>
                  <span className="text-red-600">${product.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Availability:</span>
                  <span className="text-green-700">{product.stock}</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Color:</span>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Size:</span>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-[#408A9E] hover:text-white">
                    S
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-[#408A9E] hover:text-white">
                    M
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-[#408A9E] hover:text-white">
                    L
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-[#408A9E] hover:text-white">
                    XL
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-[#408A9E] hover:text-white">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
