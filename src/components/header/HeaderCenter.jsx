import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoRocketOutline, IoClose } from "react-icons/io5";
import { allBrands, fashion, sideLinks } from "./links";
import thumb from "../../assets/images/3-1_thumb.jpg";

const HeaderCenter = () => {
  const [side, setSide] = useState(false);

  // showData
  const showSide = sideLinks.map((item, index) => (
    <li key={index}>
      <Link
        onClick={closeSide}
        className="hover:main_color text-sm font-semibold"
        to={item.path}
      >
        {item.title}
      </Link>
    </li>
  ));

  const fashionData = fashion.map((item) => (
    <ul key={item.id}>
      {item.items.map((el, index) => (
        <li key={index} className="hover:main_color">
          <Link to="/">{el}</Link>
        </li>
      ))}
    </ul>
  ));

  const brands = allBrands.map((el, index) => (
    <li key={index} className="hover:main_color">
      <Link to="/">{el}</Link>
    </li>
  ));

  // handle click
  function closeSide() {
    setSide(false);
  }

  return (
    <>
      <div className="main_paddingX h-20 flex items-center justify-between">
        <ul className="flex items-center space-x-10 capitalize">
          <li
            onClick={() => {
              setSide(true);
            }}
            className="flex flex-row-reverse items-center cursor-pointer hover:main_color"
          >
            <h3 className="md:ml-3 uppercase text-sm font-semibold border-r-2 pr-5 border-[#408A9E]">
              shop by categories
            </h3>
            <MdMenuOpen size={30} />
          </li>
          <ul className="hidden md:flex items-center space-x-10">
            <li className="hover:main_color">
              <Link to="/">home</Link>
            </li>
            <li className="relative group">
              <Link to="/" className="hover:main_color">
                fashion
              </Link>
              <div className="absolute w-[500px] bg-white rounded-md flex flex-col space-y-2 p-4 -z-10 opacity-0 group-hover:z-10 group-hover:opacity-100 duration-500">
                <div className="flex space-x-14 items-center py-2 justify-center">
                  {fashionData}
                </div>
                <div>
                  <img src={thumb} className="rounded-lg" alt="3-1_thumb" />
                </div>
              </div>
            </li>
            <li className="hover:main_color">
              <Link to="/products">products</Link>
            </li>
            <li className="relative group">
              <Link className="hover:main_color" to="/">
                all brands
              </Link>
              <ul className="absolute w-52 flex flex-col items-center p-3 rounded-lg space-y-5 -z-20 opacity-0 group-hover:z-20 group-hover:opacity-100 duration-500 bg-white">
                {brands}
              </ul>
            </li>
            <li className="hover:main_color">
              <Link to="/">best deals</Link>
            </li>
          </ul>
        </ul>
        <div className="flex items-center md:space-x-2 capitalize text-[12px] font-bold md:text-sm">
          <IoRocketOutline size={30} />
          <p>Free International Delivery</p>
        </div>
      </div>
      <div
        className={`side absolute top-0 ${
          !side ? "-left-[1550px]" : "left-0"
        } w-full h-full flex duration-150`}
      >
        <div className="w-full bg-white sm:w-96 h-full p-3 z-20">
          <div className="flex items-center justify-between border-b border-[#408A9E] pb-4">
            <h4 className="capitalize font-bold">Shop By Categories</h4>
            <IoClose
              onClick={closeSide}
              size={25}
              className="hover:main_color cursor-pointer"
            />
          </div>
          <nav className="pt-5">
            <ul className="flex flex-col space-y-4 capitalize">{showSide}</ul>
          </nav>
        </div>
        <div
          onClick={closeSide}
          className="w-full h-full hidden sm:flex bg-black opacity-50 z-20"
        ></div>
      </div>
    </>
  );
};

export default HeaderCenter;
