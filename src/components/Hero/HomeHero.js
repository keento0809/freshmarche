import React, { Fragment } from "react";
import HeroBox from "../UIcomponents/Hero/HeroBoxUI";
import HeroSearchBar from "../UIcomponents/Hero/HeroSearchBar";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const TextComponent = styled("p")({
  textAlign: "center",
});

const HomeHero = (props) => {
  return (
    <HeroBox>
      <div className="container"></div>
      <TextComponent>Explore Freshest Foods.</TextComponent>
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: "left" }}
        paddingTop={6}
      >
        Search Products
      </Typography>
      <HeroSearchBar />
    </HeroBox>
  );
};

export default HomeHero;
