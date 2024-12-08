import React from "react";
import cardImg1 from "../../assets/images/657976_400x400-236x266.jpg";
import heart from "../../assets/icons/heartIcon.svg";
import arrowlook from "../../assets/icons/loop arrow.svg";
import whiteBasket from "../../assets/icons/whileteBasket.svg";

const Card = () => {
  return (
    <div className="max-w-sm bg-white border-[1px] border-gray-300 rounded-lg shadow-md">
      <div className="bg-cover">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[150px] sm:h-[200px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={cardImg1}
            alt="card img"
          />
        </a>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">
            Proplan
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-700">
        Mushuklar uchun yuqori sifatli ovqat bo'lib, sog'liqni yaxshilash va uzoq umr ko'rishga yordam beradi.
        </p>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800">
          270.000 UZS
        </h5>
        <div className="mt-4 flex gap-2 justify-between">
          <button className="transition-all flex justify-center items-center duration-500 ease-in-out w-[30%] sm:w-[40%] md:w-[30%] py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:w-[40%] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400">
            <img src={whiteBasket} width={20} height={20} alt="basket" />
          </button>

          <button className="transition-all flex justify-center items-center duration-500 ease-in-out w-[30%] sm:w-[40%] md:w-[30%] py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:w-[40%] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400">
            <img src={heart} width={20} height={20} alt="heart" />
          </button>

          <button className="transition-all flex justify-center items-center duration-500 ease-in-out w-[30%] sm:w-[40%] md:w-[30%] py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:w-[40%] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400">
            <img src={arrowlook} width={20} height={20} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
