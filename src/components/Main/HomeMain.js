import React, { Fragment } from "react";
import HomeHero from "../Hero/HomeHero";
import HomeProducts from "../Products/HomeProducts";

const HomeMain = () => {
  return (
    <Fragment>
      <HomeHero />
      <HomeProducts />
    </Fragment>
  );
};

export default HomeMain;
