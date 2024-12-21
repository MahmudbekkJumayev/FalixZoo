import React from "react";
import appStore from "../../assets/icons/appleIcon.svg";
import googlePlay from "../../assets/icons/playMarkett.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook1.svg";
import twitter from "../../assets/icons/Twitter.svg";
import telgram from "../../assets/icons/Telegram.svg";
import media from "../../assets/icons/instagram4.png";
import logo from "../../assets/images/1.png";

const Footer = () => {
  return (
    <div className="pt-10">
      <div className="bg-gray-100 py-10  rounded-t-md">
        <div className="container">
          {/* footer top container */}
          <div className="flex justify-between border-b-[1px] py-10 border-gray-300">
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-gray-900 font-medium text-[19px] md:text-[22px]">
                Yuklab Olish
              </h3>
              <div className="flex justify-between items-center gap-2">
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
            <span className="h-[200px] w-[1px] flex justify-center bg-gray-300"></span>
            <div className="flex flex-col justify-center items-center gap-4 p-2">
              <img className="w-[150px]" src={logo} alt="" />
              <p className="text-center w-[250px] text-gray-700 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                id, similique laudantium aperiam blanditiis sequi.
              </p>
            </div>
            <span className="h-[200px] w-[1px] flex justify-center bg-gray-300"></span>
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
          <div className="border-b-[1px] flex justify-center gap-3 py-10 border-gray-300">
            <h3 className=" text-gray-900 font-medium text-[19px] md:text-[22px]">
              Sign Up For Newsletter
            </h3>
            <span>
              <input
                color="black"
                placeholder="Your Email Address"
                className="p-2 w-[500px] rounded-l-md outline-none"
                type="email"
              />
              <button className="bg-green-600 p-2 rounded-r-md text-white font-medium">
                Subscribe
              </button>
            </span>
          </div>
          {/* Footer bottom container */}
          <div className="flex justify-center items-center gap-4 py-5">
            <p className="relative pr-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:h-4 after:w-[1px] after:bg-gray-600 after:translate-y-[-50%] last:after:hidden">
              <a href="">Privacy Policy</a>
            </p>
            <p className="relative pr-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:h-4 after:w-[1px] after:bg-gray-600 after:translate-y-[-50%] last:after:hidden">
              <a href="">Terms & Conditions</a>
            </p>
            <p className="relative pr-4 after:content-[''] after:absolute aft~er:right-0 after:top-1/2 after:h-4 after:w-[1px] after:bg-gray-600 after:translate-y-[-50%] last:after:hidden">
              <a href="">Delivery Information</a>
            </p>
            <p className="relative pr-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:h-4 after:w-[1px] after:bg-gray-600 after:translate-y-[-50%] last:after:hidden">
              <a href="">About Us</a>
            </p>
            <p className="relative pr-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:h-4 after:w-[1px] after:bg-gray-600 after:translate-y-[-50%] last:after:hidden">
              <a href="">Production</a>
            </p>
            <p className="relative">
              <a href="">Connection</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
