import React from "react";
import { useState } from "react";
import phone from "../../assets/icons/phone-call.png";
import uzbFlag from "../../assets/images/en-gb.png";
import logo from "../../assets/images/1.png";
import search from "../../assets/images/magnifying-glass.png";
import icon1 from "../../assets/icons/korzinka.svg";
import heart from "../../assets/icons/heart.svg";
import person from "../../assets/icons/person.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative h-[200px]">
      <div className="flex bg-green-50 px-[20px] md:px-[200px] flex-col py-2 gap-3">
        {/* first container */}
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="flex justify-center items-center gap-3">
            <ul className="flex justify-center text-[13px] items-center gap-3 text-gray-600 font-normal">
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
          <div className="flex justify-center items-center gap-3">
            <span>
              <img
                width={15}
                height={15}
                color="gray"
                src={phone}
                alt="phone icon"
              />
            </span>
            <span className="text-gray-600 text-[13px]">
              <a href="+998977004917">+998977004917</a>
            </span>
            <span className="flex justify-center items-center gap-2">
              <img width={14} height={14} src={uzbFlag} alt="uz flag" />
              <p className="text-gray-600 text-[13px]">Til</p>
            </span>
          </div>
        </div>

        {/* second container */}
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img width={120} height={120} src={logo} alt="logo icon" />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <input
              placeholder="Qidirish"
              className="px-4 focus:outline-none w-[200px] h-10 text-[17px] font-normal border-green-600 border-2 md:w-[300px] rounded-l-2xl "
              type="text"
            />
            <button className="bg-green-600 h-10 px-5 rounded-r-2xl">
              <img width={15} src={search} alt="search icon" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="flex justify-center gap-2">
              <img width={25} src={icon1} alt="icon1" />
              <p className="font-medium">0</p>
            </span>
            <span className="flex justify-center gap-2">
              <img width={25} src={heart} alt="icon2" />
              <p className="font-medium">0</p>
            </span>
            <span className="flex justify-center gap-2">
              <img width={25} src={person} alt="icon3" />
              <p className="font-medium">Kirish</p>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      {/* Sticky Navbar for Categories */}
      <div className="bg-green-700 py-2 rounded-md px-3 sticky top-0 z-50">
        {/* Mobile View (Burger Icon and Categories) */}
        <div className="md:hidden flex justify-between items-center">
          <h2 className="text-white font-semibold text-xl">Kategoriyalar</h2>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={24} color="white" />
            ) : (
              <FaBars size={24} color="white" />
            )}
          </button>
        </div>

        {/* Desktop View (Categories List) */}
        <div className="hidden md:flex justify-center items-center gap-5 text-gray-100 font-normal text-[17px]">
          <ul className="flex justify-center items-center gap-5 text-gray-100 font-normal text-[17px]">
            <li>
              <a href="#">Mushuklar</a>
            </li>
            <li>
              <a href="#">Kemiruvchilar</a>
            </li>
            <li>
              <a href="#">Qushlar</a>
            </li>
            <li>
              <a href="#">Baliqlar</a>
            </li>
            <li>
              <a href="#">Vetapteka</a>
            </li>
            <li>
              <a href="#">Itlar</a>
            </li>
          </ul>
        </div>

        {/* Mobile View (Categories open when burger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-2">
            <ul className="flex flex-col items-center gap-3 text-gray-100 font-normal text-[17px]">
              <li>
                <a href="#">Mushuklar</a>
              </li>
              <li>
                <a href="#">Kemiruvchilar</a>
              </li>
              <li>
                <a href="#">Qushlar</a>
              </li>
              <li>
                <a href="#">Baliqlar</a>
              </li>
              <li>
                <a href="#">Vetapteka</a>
              </li>
              <li>
                <a href="#">Itlar</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
