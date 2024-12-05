import React from "react";
import cardImg1 from "../../assets/images/657976_400x400-236x266.jpg";
import heart from "../../assets/icons/heartIcon.svg";
import arrowlook from "../../assets/icons/loop arrow.svg";
import whiteBasket from "../../assets/icons/whileteBasket.svg";

const Sell = () => {
  return (
    <div className="container py-10">
      <h2 className="text-gray-800 text-[25px] font-medium">
        Eng ko'p sotilganlar
      </h2>
      <div className="grid grid-cols-4 gap-2 py-5">
        {/* card1 */}
        <div class="max-w-sm bg-white border-[1px] border-gray-300 rounded-lg shadow">
          <div className="bg-cover">
            <a href="#">
              <img
                class="rounded-t-lg"
                src={cardImg1}
                alt="card img"
                className="w-[100%] h-[200px] bg-contain bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </a>
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 ">
                Proplan
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-800">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-800 ">
              270.000UZS
            </h5>
            <div class="mt-4 flex gap-2">
              <button class="transition-all flex justify-center items-center duration-500 ease-in-out w-full px-3 py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:w-[150%] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400">
                <img src={whiteBasket} width={20} height={20} alt="basket" />
              </button>

              <button class="transition-all flex justify-center items-center duration-500 ease-in-out w-full px-3 py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:w-[150%] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400">
                <img src={heart} width={20} height={20} alt="heart" />
              </button>

              <button class="transition-all flex justify-center items-center duration-500 ease-in-out w-full px-3 py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:w-[150%] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400">
                <img src={arrowlook} width={20} height={20} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        {/* card1 */}
      </div>
    </div>
  );
};

export default Sell;
