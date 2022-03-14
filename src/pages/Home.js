import React, { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import HomeHero from "../components/Hero/HomeHero";
import HomeMain from "../components/Main/HomeMain";
import HomeProducts from "../components/Products/HomeProducts";

const Home = () => {
  return (
    <Fragment>
      <MainHeader />
      <HomeMain />
    </Fragment>
  );
};

export default Home;
