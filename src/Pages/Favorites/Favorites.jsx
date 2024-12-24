import React from "react";
import hearts from "../../assets/images/hearts.png";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center h-[70vh]">
        <div className="flex flex-col items-center gap-3">
          <img className="w-[150px]" src={hearts} alt="hearts img" />
          <h4 className="text-gray-800 text-[25px] font-medium">
            Sizga yoqqanini qo'shing
          </h4>
          <p className="text-gray-800">
            Bosh sahifaga o'ting va o'zingizga yoqqan mahsulotni tanlang
          </p>
          <Link to="/">
            <button className="bg-green-700 px-3 py-2 rounded-lg font-medium text-white">
              Bosh sahifa
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
