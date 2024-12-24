import React from "react";
//import Card from "../../components/sell/Card";
import hearts from "../../assets/images/hearts.png";
import { Link } from "react-router-dom";

const Korzinka = () => {
  return (
    <div className="container">
      {/* <div className="container flex gap-10">
        <div className="w-[300px]">settings</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card />
          <Card />
          <Card />
        </div>
      </div> */}
      <div className="flex justify-center items-center h-[70vh]">
        <div className="flex flex-col items-center gap-3">
          <img className="w-[150px]" src={hearts} alt="hearts img" />
          <h4 className="text-gray-800 text-[25px] font-medium">
            Savatingiz hozircha bo'sh
          </h4>
          <p className="text-gray-800">
            Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz
            yoki to‘plamlarni ko‘rishingiz mumkin
          </p>
          <Link to="/">
            <button className="bg-green-700 px-3 py-2 rounded-lg font-medium text-white">
              Bosh sahifa
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Korzinka;
