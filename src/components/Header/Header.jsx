import React from "react";
import Slider from "../Slider/Slider";
import cardImg1 from "../../assets/images/catcms-1.jpg";
import cardImg2 from "../../assets/images/catcms-2.jpg";
import buttonIcon from "../../assets/icons/free_icon_1 (1).svg";

const Header = () => {
  return (
    <div className="container flex flex-col gap-10">
      <div className="rounded-lg">
        <Slider />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-8">
        {/* Birinchi div: cardImg1 */}
        <div className="h-64 overflow-hidden rounded-lg group relative">
          <div
            className="h-full px-[50px] flex justify-start items-center w-full bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${cardImg1})` }}
          >
            <div className="flex flex-col justify-center items-start">
              <span className="py-5">
                <p className="text-white text-[17px] font-medium">
                  Yangi Mahsulotlar
                </p>
                <h4 className="text-white text-[25px] font-medium">
                  Yangiliklar
                </h4>
              </span>
              <button className="p-3 flex justify-center items-center gap-2 rounded-sm bg-green-700 text-white">
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

        {/* Ikkinchi div: cardImg2 */}
        <div className="h-64 overflow-hidden rounded-lg group relative">
          <div
            className="h-full w-full flex justify-start items-center px-[50px] bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            style={{ backgroundImage: `url(${cardImg2})` }}
          >
            <div className="flex flex-col justify-center items-start">
              <span className="py-5">
                <p className="text-white text-[17px] font-medium">
                  Yangi Mahsulotlar
                </p>
                <h4 className="text-white text-[25px] font-medium">
                  Yangiliklar
                </h4>
              </span>
              <button className="p-3 flex justify-center items-center gap-2 rounded-sm bg-green-700 text-white">
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
      </div>
    </div>
  );
};

export default Header;
