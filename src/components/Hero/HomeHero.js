import React, { Fragment } from "react";
import HeroBox from "../UIcomponents/Hero/HeroBoxUI";
import HeroSearchBar from "../UIcomponents/Hero/HeroSearchBar";
import Typography from "@mui/material/Typography";

const HomeHero = (props) => {
  return (
    <HeroBox>
      <p>Explore Freshest Foods.</p>
      <Typography variant="h4" component="h4">
        Search Products
      </Typography>
      <HeroSearchBar />
    </HeroBox>
  );
};

export default HomeHero;
