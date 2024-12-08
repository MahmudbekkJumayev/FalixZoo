import React from "react";
import cardImg2 from "../../assets/images/banner1.jpg";
import buttonIcon from "../../assets/icons/free_icon_1 (1).svg";

const Adver = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div
          className="p-6 md:p-10 h-[250px] sm:h-[300px] lg:h-[350px] flex flex-col gap-3 bg-cover justify-center items-start"
          style={{ backgroundImage: `url(${cardImg2})` }}
        >
          <span className="flex flex-col gap-2">
            <h4 className="text-white font-medium text-sm sm:text-[18px] md:text-[20px]">
              Magazinimizda Yangi
            </h4>
            <h2 className="text-white font-medium text-[28px] sm:text-[32px] md:text-[35px]">
              Royal Canin
            </h2>
          </span>

          <button className="p-3 flex justify-center items-center gap-2 rounded-sm bg-green-700 text-white text-sm sm:text-base">
            Sotib olish{" "}
            <img width={15} height={15} src={buttonIcon} alt="button icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adver;
