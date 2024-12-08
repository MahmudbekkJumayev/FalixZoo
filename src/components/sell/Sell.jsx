import React from "react";
import Card from "./Card";

const Sell = () => {
  return (
    <div className="container py-10">
      <h2 className="text-gray-800 text-[25px] font-medium mb-5">
        Eng ko'p sotilganlar
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* card1 */}
        <Card />
        <Card />
        <Card />
        <Card />

        {/* card1 */}
      </div>
    </div>
  );
};

export default Sell;
