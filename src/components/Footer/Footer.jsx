import React from "react";
import appStore from "../../assets/icons/appleIcon.svg";
import googlePlay from "../../assets/icons/playMarkett.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook1.svg";
import twitter from "../../assets/icons/Twitter.svg";
import telgram from "../../assets/icons/Telegram.svg";
import media from "../../assets/icons/instagram4.png";
import logo from "../../assets/images/1.png";
import visa from "../../assets/icons/visa.svg";
import mastercard from "../../assets/icons/mastercard.svg";
import uzcard from "../../assets/icons/images.png";
import humo from "../../assets/icons/humo-logo-more.png";

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="bg-blue-50 pt-10  rounded-t-md">
        <div className="container">
          {/* footer top container */}
          <div className="flex flex-col md:flex-row justify-between border-b-[1px] py-10 border-gray-300">
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-gray-900 font-medium text-[19px] md:text-[22px]">
                Yuklab Olish
              </h3>
              <div className="flex justify-center items-center gap-2">
                <span className="bg-black cursor-pointer px-4 py-2 flex justify-between items-center gap-4 rounded-md">
                  <img
                    className=" object-fill"
                    width={30}
                    height={30}
                    src={appStore}
                    alt="Download App store"
                  />
                  <span className="flex flex-col">
                    <p className="text-white text-[9px]">Download on the</p>
                    <h5 className="text-white text-[15px]">App Store</h5>
                  </span>
                </span>
                <span className="bg-black px-4 cursor-pointer py-2 flex justify-between items-center gap-4 rounded-md">
                  <img
                    className=" object-fill"
                    width={30}
                    height={30}
                    src={googlePlay}
                    alt="Download App store"
                  />
                  <span className="flex flex-col">
                    <p className="text-white text-[9px]">Download on the</p>
                    <h5 className="text-white text-[15px]">Google Play</h5>
                  </span>
                </span>
              </div>
              {/* Social media */}
              <div className="flex justify-center items-center gap-2">
                <span className="border-[1px] bg-white border-gray-300 p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-500">
                  <img width={20} height={20} src={telgram} alt="Telegram" />
                </span>
                <span className="border-[1px] bg-white border-gray-300 p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:border-red-500">
                  <img width={20} height={20} src={media} alt="Media" />
                </span>
                <span className="border-[1px] bg-white border-gray-300 p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-700">
                  <img width={20} height={20} src={facebook} alt="Facebook" />
                </span>
                <span className="border-[1px] bg-white border-gray-300 p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:border-red-600">
                  <img width={20} height={20} src={youtube} alt="YouTube" />
                </span>
                <span className="border-[1px] bg-white border-gray-300 p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-400">
                  <img width={20} height={20} src={twitter} alt="Twitter" />
                </span>
              </div>
            </div>
            <span className="h-[200px] w-[1px] hidden md:block bg-gray-300"></span>
            <div className="flex flex-col justify-center items-center gap-4 p-2">
              <img className="w-[150px]" src={logo} alt="" />
              <p className="text-center w-[250px] text-gray-700 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                id, similique laudantium aperiam blanditiis sequi.
              </p>
            </div>
            <span className="h-[200px] w-[1px] hidden md:block bg-gray-300"></span>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-center text-gray-900 font-medium text-[19px] md:text-[22px]">
                Malumotlar
              </h3>
              <span className="flex flex-col justify-center items-center text-gray-700 font-normal">
                <p>город Ташкент метро Буюк ипак юли</p>
                <p>+998999764237</p>
                <p>info@felixzoo.com</p>
              </span>
            </div>
          </div>
          {/* Footer between container */}
          <div className="border-b-[1px] w-[100%] flex flex-col md:flex-row items-center justify-center gap-3 py-10 border-gray-300">
            <h3 className="w-[30%] text-gray-900 font-medium text-center text-[19px] md:text-[22px]">
              Sign Up For Newsletter
            </h3>
            <span className="w-[70%] flex justify-center items-center">
              <input
                color="black"
                placeholder="Your Email Address"
                className="p-2 rounded-l-md outline-none w-[70%]"
                type="email"
              />
              <button className="bg-green-600 p-2 rounded-r-md text-white font-medium">
                Subscribe
              </button>
            </span>
          </div>
          {/* Footer bottom container */}
          {/* Footer bottom container */}
          <div className="flex flex-col md:flex-row  justify-center items-center gap-4 border-b-[1px] py-7 border-gray-300">
            <p className="relative text-center  pr-4 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-4 md:after:w-[1px] md:after:bg-gray-600 md:after:translate-y-[-50%] md:last:after:hidden">
              <a href="">Privacy Policy</a>
            </p>
            <p className="relative text-center pr-4 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-4 md:after:w-[2px] md:after:bg-gray-600 md:after:translate-y-[-50%] md:last:after:hidden">
              <a href="">Terms & Conditions</a>
            </p>
            <p className="relative text-center pr-4 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-4 md:after:w-[2px] md:after:bg-gray-600 md:after:translate-y-[-50%] md:last:after:hidden">
              <a href="">Delivery Information</a>
            </p>
            <p className="relative text-center pr-4 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-4 md:after:w-[2px] md:after:bg-gray-600 md:after:translate-y-[-50%] md:last:after:hidden">
              <a href="">About Us</a>
            </p>
            <p className="relative text-center pr-4 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-4 md:after:w-[2px] md:after:bg-gray-600 md:after:translate-y-[-50%] md:last:after:hidden">
              <a href="">Production</a>
            </p>
            <p className="relative text-center pr-4 md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-4 md:after:w-[2px] md:after:bg-gray-600 md:after:translate-y-[-50%] md:last:after:hidden">
              <a href="">Connection</a>
            </p>
          </div>

          {/* Footer paymet */}
          <div className="flex p-2 flex-col-reverse md:flex-row justify-between items-center">
            <div>
              <p>Powered By OpenCart Felix Zoo © 2024</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="hover:scale-110 transition-transform duration-300">
                <img width={50} height={35} src={visa} alt="Visa" />
              </span>
              <span className="hover:scale-110 transition-transform duration-300">
                <img width={50} height={35} src={mastercard} alt="MasterCard" />
              </span>
              <span className="hover:scale-110 transition-transform duration-300">
                <img width={50} height={35} src={uzcard} alt="UzCard" />
              </span>
              <span className="hover:scale-110 transition-transform duration-300">
                <img width={50} height={35} src={humo} alt="Humo" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
