import React from "react";
import cardImg1 from "../../assets/images/657976_400x400-236x266.jpg";
import heart from "../../assets/icons/heart.svg";
import arrowlook from "../../assets/icons/arrowloop.svg";
import whiteBasket from "../../assets/icons/whileteBasket.svg";
import Card from "../sell/Card";

const News = () => {
  return (
    <div className="container py-10">
      <h2 className="text-gray-800 text-[25px] font-medium">
        So'ngi yangiliklar
      </h2>
      <div className="grid grid-cols-2 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* card1 */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* card1 */}
      </div>
    </div>
  );
};

export default News;
