import { useEffect } from "react";
import banner from "../assets/images/banner_product.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Products from "./Products";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="flex items-center flex-col md:flex-row space-y-4 justify-between bg-gradient-to-b from-white to-[#408A9E] p-10">
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start space-y-5 font-bold"
        >
          <h2 className="text-[#408A9E] text-2xl md:text-4xl">
            NEW ERA OF SMARTPHONES
          </h2>
          <span className="text-red-600 text-3xl">$460</span>
          <p>Apple Iphone 6s</p>
          <button className="main_btn ml-0">
            <a href="#products">shop now</a>
          </button>
        </div>
        <div className="w-full md:w-1/2" data-aos="zoom-in-up">
          <img src={banner} alt="banner" />
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
