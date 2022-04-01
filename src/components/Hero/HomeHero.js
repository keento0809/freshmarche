import React, { useContext, useEffect, useState } from "react";
import NotifyContext from "../../contexts/notify-context";
import HeroBox from "../UIcomponents/Hero/HeroBoxUI";
import HeroSearchBar from "../UIcomponents/Hero/HeroSearchBar";
import Typography from "@mui/material/Typography";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";

import { styled } from "@mui/system";
import { SnackbarContent } from "@mui/material";

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
  // const [showing, setShowing] = useState("");

  // let snackBarContent = "";
  // console.log(notifyCtx.isNotifying);

  // useEffect(() => {
  // snackBarContent = <AlertSnackBar label="Product successfully added!" />;
  //   console.log("SnackBar re-rendering...");
  //   setShowing(<AlertSnackBar label="" />);
  //   setTimeout(() => {
  //     setShowing("");
  //   }, 2500);
  // }, [notifyCtx.isNotifying]);

  return (
    <HeroBox>
      <div className="container"></div>
      {/* original code. Do not delete */}
      {notifyCtx.isNotifying && (
        <AlertSnackBar label="Product successfully added!" />
      )}
      {/* {notifyCtx.isNotifying && showing} */}
      <TextComponent>Explore Freshest Foods.</TextComponent>
      <Typography variant="h4" component="h4" paddingTop={6} sx={style}>
        Search Products
      </Typography>
      <HeroSearchBar value={props.value} onChange={props.onChange} />
    </HeroBox>
  );
};

export default HomeHero;
