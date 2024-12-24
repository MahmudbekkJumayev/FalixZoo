import React from "react";
import phoneIcon from "../../assets/icons/PhoneIcon1.svg";
import van from "../../assets/icons/van.svg";
import moneyBag from "../../assets/icons/moneyBag.svg";

const Deliver = () => {
  return (
    <div className="py-10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex transition-all cursor-pointer hover:-translate-y-3 bg-blue-50 p-5 rounded-lg flex-col justify-center items-center">
          <span className="p-5 flex justify-center items-center border-[1px] border-gray-400 rounded-full hover:bg-green-600">
            <img width={30} className="" height={30} src={phoneIcon} alt="Phone icon" />
          </span>
          <h3 className="text-gray-900 font-medium text-[22px]">24 x 7 texnik yordam</h3>
          <p className="text-gray-800 font-normal text-[16px] text-center">
            Biz har doim veb-saytimizdan foydalanish bilan bog'liq har qanday
            savol va muammolar bo'yicha 24/7 yordam berishga tayyormiz.
          </p>
        </div>
        <div className="flex transition-all cursor-pointer hover:-translate-y-3 bg-blue-50 p-5 rounded-lg flex-col justify-center items-center">
          <span className="p-5 flex justify-center items-center border-[1px] border-gray-400 rounded-full hover:bg-green-600">
            <img width={30} className="" height={30} src={van} alt="Phone icon" />
          </span>
          <h3 className="text-gray-900 font-medium text-[22px]">24 x 7 texnik yordam</h3>
          <p className="text-gray-800 font-normal text-[16px] text-center">
            Biz har doim veb-saytimizdan foydalanish bilan bog'liq har qanday
            savol va muammolar bo'yicha 24/7 yordam berishga tayyormiz.
          </p>
        </div>
        <div className="flex transition-all cursor-pointer hover:-translate-y-3 bg-blue-50 p-5 rounded-lg flex-col gap-2 justify-center items-center">
          <span className="p-5 flex justify-center items-center border-[1px] border-gray-400 rounded-full hover:bg-green-600">
            <img width={30} className="" height={30} src={moneyBag} alt="Phone icon" />
          </span>
          <h3 className="text-gray-900 font-medium text-[22px]">24 x 7 texnik yordam</h3>
          <p className="text-gray-800 font-normal text-[16px] text-center">
            Biz har doim veb-saytimizdan foydalanish bilan bog'liq har qanday
            savol va muammolar bo'yicha 24/7 yordam berishga tayyormiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
