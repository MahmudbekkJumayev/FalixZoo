import React from "react";
import Header from "../../components/Header/Header";
import Sell from "../../components/sell/Sell";
import News from "../../components/news/News";
import Adver from "../../components/Advert/Adver";
import Sponsor from "../../components/sponsor/Sponsor";


const Home = () => {
  return (
    <div>
      <Header />
      <Sell />
      <News />
      <Adver />
      <Sponsor />
    </div>
  );
};

export default Home;
