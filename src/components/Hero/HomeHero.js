import React, { useContext } from "react";
import NotifyContext from "../../contexts/notify-context";
import HeroBox from "../UIcomponents/Hero/HeroBoxUI";
import HeroSearchBar from "../UIcomponents/Hero/HeroSearchBar";
import Typography from "@mui/material/Typography";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";

import { styled } from "@mui/system";

const TextComponent = styled("p")({
  textAlign: "center",
  color: "secondary",
  fontWeight: "Bold",
});

const style = {
  textAlign: "center",
  color: "secondary.main",
  // color: "background.default",
};

const HomeHero = (props) => {
  const notifyCtx = useContext(NotifyContext);

  return (
    <HeroBox>
      <div className="container"></div>
      {notifyCtx.isNotifying && (
        <AlertSnackBar label="Product successfully added!" />
      )}
      <TextComponent>Explore Freshest Foods.</TextComponent>
      <Typography variant="h4" component="h4" paddingTop={6} sx={style}>
        Search Products
      </Typography>
      <HeroSearchBar value={props.value} onChange={props.onChange} />
    </HeroBox>
  );
};

export default HomeHero;
