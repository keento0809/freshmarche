import React, { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import HomeHero from "../components/Hero/HomeHero";
import HomeMain from "../components/Main/HomeMain";
import MainFooter from "../components/Footer/MainFooter";
import HomeProducts from "../components/Products/HomeProducts";
import { styled } from "@mui/system";

const HomeComponent = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Home = () => {
  return (
    <div className="わけわからん">
      <MainHeader />
      <HomeMain />
      <MainFooter />
    </div>
  );
};

export default Home;
