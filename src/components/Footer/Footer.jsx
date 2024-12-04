import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="bg-green-700 py-10">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-900 text-[18px] font-medium">
                Ma'lumotlar
              </h4>
              <ul className="text-white font-normal">
                <li>
                  <a href="">Biz xaqimizda</a>
                </li>
                <li>
                  <a href="">Yetkazib berish va to'lovlar</a>
                </li>
                <li>
                  <a href="">Aksiya</a>
                </li>
                <li>
                  <a href="">Ulgurji xaridorlar</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-900 text-[18px] font-medium">
                Mijozlar Xizmati
              </h4>
              <ul className="text-white font-normal">
                <li>
                  <a href="">Biz bilan Bog'lanish</a>
                </li>
                <li>
                  <a href="">Qaytish</a>
                </li>
                <li>
                  <a href="">Sayt Xaritasi</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-900 text-[18px] font-medium">
                Qo'shimchalar
              </h4>
              <ul className="text-white font-normal">
                <li>
                  <a href="">Brendlar</a>
                </li>
                <li>
                  <a href="">Sovg'a Sertifikatlari</a>
                </li>
                <li>
                  <a href="">Hamkorlik</a>
                </li>
                <li>
                  <a href="">Maxsus Taklif</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-900 text-[18px] font-medium">
                Mening Hisobim
              </h4>
              <ul className="text-white font-normal">
                <li>
                  <a href="">Mening Hisobim</a>
                </li>
                <li>
                  <a href="">Buyurtma Tarixi</a>
                </li>
                <li>
                  <a href="">Xohlaganlar Ro'yhati</a>
                </li>
                <li>
                  <a href="">Yangi Ma'lumotlar</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Foot 2 qismi */}
          <span className="h-[1px] flex justify-center items-center my-5 bg-white w-[100%]"></span>
          <div className="flex flex-col justify-start items-start">
            <span className="flex justify-center items-center gap-1">
                <p className="text-white font-medium">Nextin Web Studio</p>
                <p className="text-gray-900">tomonidan dasturlangan</p>
            </span>
            <p>FelixZoo © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
