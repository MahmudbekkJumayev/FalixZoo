import React from "react";
import Slider from "../Slider/Slider";
import cardImg1 from "../../assets/images/catcms-1.jpg";
import cardImg2 from "../../assets/images/catcms-2.jpg";
import buttonIcon from "../../assets/icons/free_icon_1 (1).svg";
import Discount from "./Discount";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      {/* Slider Section */}
      <div className="rounded-lg bg-gray-200">
        <Slider />
      </div>
      <Discount />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8">
        <div className="h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg group relative">
          <div
            className="h-full px-6 sm:px-8 md:px-[50px] flex justify-start items-center w-full bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${cardImg1})` }}
          >
            <div className="flex flex-col justify-center items-start">
              <span className="py-3 sm:py-5">
                <p className="text-white text-sm sm:text-[17px] font-medium">
                  Yangi Mahsulotlar
                </p>
                <h4 className="text-white text-lg sm:text-[25px] font-medium">
                  Yangiliklar
                </h4>
              </span>
              <button className="px-4 py-2 flex justify-center items-center gap-2 rounded-sm bg-green-700 text-white text-sm sm:text-base">
                Sotib olish{" "}
                <img
                  width={12}
                  height={12}
                  src={buttonIcon}
                  alt="button icon"
                />
              </button>
            </div>
          </div>
        </div>

       
        <div className="h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg group relative">
          <div
            className="h-full px-6 sm:px-8 md:px-[50px] flex justify-start items-center w-full bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${cardImg2})` }}
          >
            <div className="flex flex-col justify-center items-start">
              <span className="py-3 sm:py-5">
                <p className="text-white text-sm sm:text-[17px] font-medium">
                  Yangi Mahsulotlar
                </p>
                <h4 className="text-white text-lg sm:text-[25px] font-medium">
                  Yangiliklar
                </h4>
              </span>
              <button className="px-4 py-2 flex justify-center items-center gap-2 rounded-sm bg-green-700 text-white text-sm sm:text-base">
                Sotib olish{" "}
                <img
                  width={12}
                  height={12}
                  src={buttonIcon}
                  alt="button icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
