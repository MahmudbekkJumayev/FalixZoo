import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="bg-green-700 py-10 rounded-t-md">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            {/* First Column */}
            <div className="flex flex-col justify-start items-start gap-2">
              <div class="flex space-x-4">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  className="flex items-center px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 384 512"
                  >
                    <path d="M318.7 268.6c-6.2 6.6-15.4 11.9-24.7 15.5-9.8 3.8-20.5 5.9-31.3 5.9-8.3 0-16.6-1.2-24.7-3.8-9.3-3-18.4-7.4-27.1-13.3-8.6-5.8-16.3-13.1-22.9-21.7-6.6-8.7-11.9-18.2-15.5-28.5-3.8-10.7-5.9-22.2-5.9-34.1 0-17.2 3.4-32.9 10.2-46.5 6.6-13.2 15.8-24.3 27.6-33.3 11.8-9 25.1-15.6 39.8-19.8 14.7-4.2 30-6.3 46-6.3 8.3 0 16.6 1.2 24.7 3.8 9.3 3 18.4 7.4 27.1 13.3 8.6 5.8 16.3 13.1 22.9 21.7 6.6 8.7 11.9 18.2 15.5 28.5 3.8 10.7 5.9 22.2 5.9 34.1 0 17.2-3.4 32.9-10.2 46.5-6.6 13.2-15.8 24.3-27.6 33.3-11.8 9-25.1 15.6-39.8 19.8-14.7 4.2-30 6.3-46 6.3zm0 160c-35.6 0-70-7.2-102.7-21.5-31.6-13.8-60.2-33.1-85.3-57.5-24.5-24.5-43.8-53.1-57.5-85.3-13.3-31.6-20.2-65.6-20.2-102.7 0-35.6 6.6-70 20.2-102.7 13.8-31.6 33.1-60.2 57.5-85.3 24.5-24.5 53.1-43.8 85.3-57.5 31.6-13.3 65.6-20.2 102.7-20.2 35.6 0 70 6.6 102.7 20.2 31.6 13.8 60.2 33.1 85.3 57.5 24.5 24.5 43.8 53.1 57.5 85.3 13.3 31.6 20.2 65.6 20.2 102.7 0 35.6-6.6 70-20.2 102.7-13.8 31.6-33.1 60.2-57.5 85.3-24.5 24.5-53.1 43.8-85.3 57.5-31.6 13.3-65.6 20.2-102.7 20.2zm57.3-57.3z" />
                  </svg>
                  <span>Download on the App Store</span>
                </a>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  className="flex items-center px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M325.3 234.5L125.5 60.8 255.8 191z" />
                  </svg>
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-800 text-lg font-medium">
                Mijozlar Xizmati
              </h4>
              <ul className="text-white text-sm font-normal">
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

            {/* Third Column */}
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-800 text-lg font-medium">
                Qo'shimchalar
              </h4>
              <ul className="text-white text-sm font-normal">
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

            {/* Fourth Column */}
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-gray-800 text-lg font-medium">
                Mening Hisobim
              </h4>
              <ul className="text-white text-sm font-normal">
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

          {/* Footer Separator */}
          <span className="h-[1px] flex justify-center items-center my-5 bg-white w-full"></span>

          {/* Footer Bottom */}
          <div className="flex flex-col  justify-start items-start text-start">
            <span className="flex justify-center items-center gap-1">
              <p className="text-white text-sm font-medium">
                Nextin Web Studio
              </p>
              <p className="text-gray-900 text-sm">tomonidan dasturlangan</p>
            </span>
            <p className="text-white text-sm">FelixZoo © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
