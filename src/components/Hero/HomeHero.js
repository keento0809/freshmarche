import React, { useContext, useEffect, useState } from "react";
import NotifyContext from "../../contexts/notify-context";
import HeroBox from "../UIcomponents/Hero/HeroBoxUI";
import HeroSearchBar from "../UIcomponents/Hero/HeroSearchBar";
import Typography from "@mui/material/Typography";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const TextComponent = styled("p")({
  textAlign: "center",
  color: "secondary",
  fontWeight: "Bold",
});

const style = {
  textAlign: "center",
  color: "secondary.main",
};

const HomeHero = (props) => {
  const notifyCtx = useContext(NotifyContext);
  const theme = useTheme();

  const styleSnackBar = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "5",
  };

  return (
    <HeroBox sx={{ position: "relative" }}>
      <div className="container"></div>
      {/* original code. Do not delete */}
      {notifyCtx.isNotifying && <AlertSnackBar sx={styleSnackBar} />}
      {/* {notifyCtx.isNotifying && showing} */}
      {/* <TextComponent>Explore Freshest Foods.</TextComponent> */}
      <Typography
        variant="h4"
        component="h4"
        paddingTop={6}
        paddingBottom={2}
        sx={style}
      >
        Search Products
      </Typography>
      <HeroSearchBar value={props.value} onChange={props.onChange} />
    </HeroBox>
  );
};

export default HomeHero;
