import React, { useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import InputSearch from "../products/InputSearch";
import PhoneSearch from "../products/PhoneSearch";
import { useSelector } from "react-redux";

const HeaderTop = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  return (
    <header className="flex justify-between items-center h-20 shadow-lg main_paddingX">
      <Link
        to="/"
        className="main_color uppercase font-bold text-2xl sm:text-4xl"
      >
        classyshop
      </Link>

      <InputSearch />
      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-3 lg:space-x-10 capitalize">
          <li>
            <Link to="/login" className="hover:main_color">
              login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:main_color">
              register
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:main_color">
              <CiHeart size={30} />
            </Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="hover:main_color">
              <CiShoppingCart size={30} />
              <span className=" absolute left-2 -top-3 h-5 w-5 bg-[#408A9E] text-white text-center rounded-full text-sm">
                {cart.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="md:hidden cursor-pointer hover:main_color duration-300 z-20"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {!toggle ? <CgMenuRightAlt size={30} /> : <IoClose size={30} />}
      </div>
      <div
        className={`md:hidden absolute w-full main_paddingX py-5 space-y-5 flex flex-col items-center justify-center left-0 ${
          !toggle ? "-top-80" : "top-20"
        } duration-500 bg-white z-10`}
      >
        <PhoneSearch />
        <nav>
          <ul className="flex items-center flex-col space-y-3 capitalize">
            <li>
              <Link to="/login" className="hover:main_color">
                login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:main_color">
                register
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:main_color">
                <CiHeart size={30} />
              </Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="hover:main_color">
                <CiShoppingCart size={30} />
                <span className=" absolute left-2 -top-3 h-5 w-5 bg-[#408A9E] text-white text-center rounded-full text-sm">
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTop;
