import React, { useState } from "react";
import phone from "../../assets/icons/phone-call.png";
import uzbFlag from "../../assets/images/en-gb.png";
import logo from "../../assets/images/1.png";
import search from "../../assets/images/magnifying-glass.png";
import icon1 from "../../assets/icons/korzinka.svg";
import heart from "../../assets/icons/heart.svg";
import person from "../../assets/icons/person.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import SiginUp from "../../Pages/Registor/SiginUp/SiginUp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div className="relative h-[170px]">
      <div className="flex bg-green-50 px-[20px] md:px-[120px] flex-col py-2 gap-3">
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
              <img width={17} height={17} src={uzbFlag} alt="uz flag" />
              <p className="text-gray-600 text-[13px]">O'zbekcha</p>
            </span>
          </div>
        </div>

        {/* second container */}
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
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
          <div className="flex justify-center items-center gap-2">
            <span className="flex justify-center gap-2 cursor-pointer hover:bg-gray-300 rounded-lg p-2">
              <img width={25} src={icon1} alt="icon1" />
              <p className="font-medium">0</p>
            </span>
            <span className="flex justify-center gap-2 cursor-pointer hover:bg-gray-300 rounded-lg p-2">
              <img width={25} src={heart} alt="icon2" />
              <p className="font-medium">0</p>
            </span>
            <span
              onClick={handleOpenModal}
              className="flex justify-center gap-2 cursor-pointer hover:bg-gray-300 rounded-lg p-2"
            >
              <img width={25} src={person} alt="icon3" />
              <p className="font-medium">Kirish</p>
            </span>
          </div>
        </div>
      </div>

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
              <Link to="/category/Cats">Mushuklar</Link>
            </li>
            <li>
              <Link to="/category/Rodents">Kemiruvchilar</Link>
            </li>
            <li>
              <Link to="/category/Birds">Qushlar</Link>
            </li>
            <li>
              <Link to="/category/Fish">Baliqlar</Link>
            </li>
            <li>
              <Link to="/category/Vetapteka">Vetapteka</Link>
            </li>
            <li>
              <Link to="/category/Dogs">Itlar</Link>
            </li>
          </ul>
        </div>

        {/* Mobile View (Categories open when burger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-2">
            <ul className="flex flex-col items-center gap-3 text-gray-100 font-normal text-[17px]">
              <li>
                <Link to="/category/Cats" onClick={() => setIsMenuOpen(false)}>
                  Mushuklar
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Rodents"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kemiruvchilar
                </Link>
              </li>
              <li>
                <Link to="/category/Birds" onClick={() => setIsMenuOpen(false)}>
                  Qushlar
                </Link>
              </li>
              <li>
                <Link to="/category/Fish" onClick={() => setIsMenuOpen(false)}>
                  Baliqlar
                </Link>
              </li>
              <li>
                <Link
                  to="/category/Vetapteka"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vetapteka
                </Link>
              </li>
              <li>
                <Link to="/category/Dogs" onClick={() => setIsMenuOpen(false)}>
                  Itlar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <SiginUp isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
