import React from "react";
import cardImg1 from "../../assets/images/657976_400x400-236x266.jpg";
import heart from "../../assets/icons/heart.svg";
import arrowlook from "../../assets/icons/arrowloop.svg";
import whiteBasket from "../../assets/icons/whileteBasket.svg";

const Sell = () => {
  return (
    <div className="container py-10">
      <h2 className="text-gray-800 text-[25px] font-medium">
        Eng ko'p sotilganlar
      </h2>
      <div className="grid grid-cols-4 gap-2 py-5">
        {/* card1 */}
        <div className="grid border-[1px] rounded-md border-gray-500  grid-cols-1">
          <div className="flex justify-center items-center bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <img src={cardImg1} alt="card img" />
          </div>
          <span className="w-[90%] h-[1px] bg-gray-500 flex justify-center items-center m-auto"></span>
          <div className="p-3 flex flex-col gap-2">
            <p className="text-start text-[14px] font-medium hover:text-green-900">
              Buyrak sog'lig'ini qo'llab-quvvatlash uchun kattalar
              sterilizatsiya qilingan mushuklar uchun PRO PLAN® ozuqasi, yuqori
              kurka tarkibi, Sterilizatsiyalangan RENAL PLUS
            </p>
            <p className="text-[16px] text-gray-800 font-medium">270.00UZS</p>
            <div className="flex justify-between">
              <div>
                <button className="bg-green-700 text-white font-medium flex justify-center gap-3 items-center p-2 rounded-md">
                  <img
                    width={14}
                    height={14}
                    src={whiteBasket}
                    alt="White korzinka icon"
                  />{" "}
                  Savatga Qo'shish
                </button>
              </div>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img width={14} height={14} src={heart} alt="heart icon" />
              </span>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img
                  width={14}
                  height={14}
                  src={arrowlook}
                  alt="Arrow loop icon"
                />
              </span>
            </div>
          </div>
        </div>
        {/* card1 */}
        <div className="grid border-[1px] rounded-md border-gray-500  grid-cols-1">
          <div className="flex justify-center items-center">
            <img src={cardImg1} alt="card img" />
          </div>
          <span className="w-[90%] h-[1px] bg-gray-500 flex justify-center items-center m-auto"></span>
          <div className="p-3 flex flex-col gap-2">
            <p className="text-start text-[14px] font-medium hover:text-green-900">
              Buyrak sog'lig'ini qo'llab-quvvatlash uchun kattalar
              sterilizatsiya qilingan mushuklar uchun PRO PLAN® ozuqasi, yuqori
              kurka tarkibi, Sterilizatsiyalangan RENAL PLUS
            </p>
            <p className="text-[16px] text-gray-800 font-medium">270.00UZS</p>
            <div className="flex justify-between">
              <div>
                <button className="bg-green-700 text-white font-medium flex justify-center gap-3 items-center p-2 rounded-md">
                  <img
                    width={14}
                    height={14}
                    src={whiteBasket}
                    alt="White korzinka icon"
                  />{" "}
                  Savatga Qo'shish
                </button>
              </div>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img width={14} height={14} src={heart} alt="heart icon" />
              </span>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img
                  width={14}
                  height={14}
                  src={arrowlook}
                  alt="Arrow loop icon"
                />
              </span>
            </div>
          </div>
        </div>
        {/* card1 */}
        <div className="grid border-[1px] rounded-md border-gray-500  grid-cols-1">
          <div className="flex justify-center items-center">
            <img src={cardImg1} alt="card img" />
          </div>
          <span className="w-[90%] h-[1px] bg-gray-500 flex justify-center items-center m-auto"></span>
          <div className="p-3 flex flex-col gap-2">
            <p className="text-start text-[14px] font-medium hover:text-green-900">
              Buyrak sog'lig'ini qo'llab-quvvatlash uchun kattalar
              sterilizatsiya qilingan mushuklar uchun PRO PLAN® ozuqasi, yuqori
              kurka tarkibi, Sterilizatsiyalangan RENAL PLUS
            </p>
            <p className="text-[16px] text-gray-800 font-medium">270.00UZS</p>
            <div className="flex justify-between">
              <div>
                <button className="bg-green-700 text-white font-medium flex justify-center gap-3 items-center p-2 rounded-md">
                  <img
                    width={14}
                    height={14}
                    src={whiteBasket}
                    alt="White korzinka icon"
                  />{" "}
                  Savatga Qo'shish
                </button>
              </div>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img width={14} height={14} src={heart} alt="heart icon" />
              </span>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img
                  width={14}
                  height={14}
                  src={arrowlook}
                  alt="Arrow loop icon"
                />
              </span>
            </div>
          </div>
        </div>
        {/* card1 */}
        <div className="grid border-[1px] rounded-md border-gray-500  grid-cols-1">
          <div className="flex justify-center items-center">
            <img src={cardImg1} alt="card img" />
          </div>
          <span className="w-[90%] h-[1px] bg-gray-500 flex justify-center items-center m-auto"></span>
          <div className="p-3 flex flex-col gap-2">
            <p className="text-start text-[14px] font-medium hover:text-green-900">
              Buyrak sog'lig'ini qo'llab-quvvatlash uchun kattalar
              sterilizatsiya qilingan mushuklar uchun PRO PLAN® ozuqasi, yuqori
              kurka tarkibi, Sterilizatsiyalangan RENAL PLUS
            </p>
            <p className="text-[16px] text-gray-800 font-medium">270.00UZS</p>
            <div className="flex justify-between">
              <div>
                <button className="bg-green-700 text-white font-medium flex justify-center gap-3 items-center p-2 rounded-md">
                  <img
                    width={14}
                    height={14}
                    src={whiteBasket}
                    alt="White korzinka icon"
                  />{" "}
                  Savatga Qo'shish
                </button>
              </div>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img width={14} height={14} src={heart} alt="heart icon" />
              </span>
              <span className="p-2 border-[2px] rounded-md border-green-800 flex justify-center items-center">
                <img
                  width={14}
                  height={14}
                  src={arrowlook}
                  alt="Arrow loop icon"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
