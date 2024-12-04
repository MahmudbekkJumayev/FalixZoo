import React from "react";
import cardImg2 from "../../assets/images/banner1.jpg";
import buttonIcon from "../../assets/icons/free_icon_1 (1).svg";

const Adver = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div
          className="p-10 h-[300px] flex flex-col gap-3 justify-center items-start"
          style={{ backgroundImage: `url(${cardImg2})` }}
        >
          <span className="flex flex-col gap-2">
            <h4 className="text-white font-medium text-[20px]">
              Magazinimizda Yangi
            </h4>
            <h2 className="text-white font-medium text-[35px]">Royal Canin</h2>
          </span>

          <button className="p-3 flex justify-center items-center gap-2 rounded-sm bg-green-700 text-white">
            Sotib olish{" "}
            <img width={15} height={15} src={buttonIcon} alt="button icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adver;
