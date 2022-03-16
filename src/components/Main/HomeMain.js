import React, { Fragment } from "react";
import HomeHero from "../Hero/HomeHero";
import HomeProducts from "../Products/HomeProducts";

const HomeMain = () => {
  return (
    <div className="allMain">
      <HomeHero />
      <HomeProducts />
    </div>
  );
};

export default HomeMain;
