import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import homeicon from "../../assets/icons/home.svg";
import Cats from "./Cats";
import Rodents from "./Rodents";
import Birds from "./Birds";
import Fish from "./Fish";
import Vetapteka from "./Vetapteka";
import Dogs from "./Dogs";

const categories = {
  Cats: { name: "Mushuklar" },
  Rodents: { name: "Kemiruvchilar" },
  Birds: { name: "Qushlar" },
  Fish: { name: "Baliqlar" },
  Vetapteka: { name: "Vetapteka" },
  Dogs: { name: "Itlar" },
};

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categoryName || "Cats");

  useEffect(() => {
    if (categories[categoryName]) {
      setActiveCategory(categoryName);
    } else {
      navigate("/category/Cats");
    }
  }, [categoryName, navigate]);

  return (
    <div className="container flex flex-col">
      {/* navigate */}
      <div className="flex justify-start items-center gap-2">
        <img width={20} height={20} src={homeicon} alt="home icon" />
        <span className="text-[22px] font-medium">/</span>
        <p>{categories[activeCategory]?.name || "Kategoriya mavjud emas"}</p>
      </div>

      {/* categories */}
      <div className="flex py-5 gap-5">
        <div className="flex flex-col w-[300px] justify-start items-start rounded-lg">
          {Object.keys(categories).map((key, index) => (
            <span
              key={key}
              className={`px-8 py-3 w-[100%] rounded-lg font-medium text-gray-600 cursor-pointer 
                ${
                  activeCategory === key
                    ? "bg-blue-400 text-white font-medium"
                    : "hover:bg-gray-200 text-black"
                }
              `}
              onClick={() => navigate(`/category/${key}`)}
            >
              {categories[key].name}
            </span>
          ))}
        </div>

        {/* cards */}
        <div>
          {activeCategory === "Cats" && <Cats />}
          {activeCategory === "Rodents" && <Rodents />}
          {activeCategory === "Birds" && <Birds />}
          {activeCategory === "Fish" && <Fish />}
          {activeCategory === "Vetapteka" && <Vetapteka />}
          {activeCategory === "Dogs" && <Dogs />}
        </div>
      </div>
    </div>
  );
};

export default Category;
