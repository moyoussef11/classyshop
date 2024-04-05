import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clear, deincrement, deleteFromCart, increment } from "../../RTK/slices/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // ui tbody

  const showCarts = carts.map((cart) => (
    <tr key={cart.id} className="border-b whitespace-nowrap">
      <td className="text-sm font-light px-6 py-4 flex flex-col sm:flex-row items-center space-x-1">
        <img
          className="w-20 h-20 object-contain"
          src={cart.thumbnail}
          alt={cart.title}
        />
        <div className="font-semibold">
          <h4>{cart.title}</h4>
          <p>{cart.description.substring(0, 45)}.... </p>
        </div>
      </td>
      <td className="text-sm text-red-600 font-light px-6 py-4">
        ${cart.price}
      </td>
      <td className="text-sm font-light px-6 py-4">
        <div className="flex items-center justify-between">
          <FaPlus
            onClick={() => dispatch(increment(cart.id))}
            className="cursor-pointer"
          />
          <span>{cart.quantity}</span>
          <FaMinus
            onClick={() => dispatch(deincrement(cart.id))}
            className="cursor-pointer"
          />
        </div>
      </td>
      <td className="text-sm font-light px-6 py-4">
        <div className="flex items-center">
          <span className="text-green-600 font-semibold">
            ${cart.price * cart.quantity}
          </span>
          <MdDeleteForever
            size={20}
            onClick={() => dispatch(deleteFromCart(cart))}
            className="text-red-500 cursor-pointer"
          />
        </div>
      </td>
    </tr>
  ));

  return (
    <>
      {carts.length == 0 ? (
        <div className=" w-full h-[550px] flex flex-col space-y-4 items-center justify-center">
          <p className="main_color text-2xl font-bold">
            cart is empty go shopping!!
          </p>
          <Link to="/" className="main_btn">
            shopping now
          </Link>
        </div>
      ) : (
        <div className="main_paddingX w-full">
          <h3 className="text-center capitalize font-semibold my-3">
            your cart [{carts.length} items]
          </h3>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden flex flex-col items-center justify-center">
                  <table className="">
                    <thead className="border-b capitalize">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          item
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          price
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>{showCarts}</tbody>
                  </table>
                  <button
                    onClick={() => dispatch(clear())}
                    className="main_btn my-3 bg-red-500 w-fit"
                  >
                    delete all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
