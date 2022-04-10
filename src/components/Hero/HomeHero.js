import React, { useContext, useEffect } from "react";
import NotifyContext from "../../contexts/notify-context";
import HeroBox from "../UIcomponents/Hero/HeroBoxUI";
import HeroSearchBar from "../UIcomponents/Hero/HeroSearchBar";
import Typography from "@mui/material/Typography";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { fontWeight, styled, width } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import Box from "@mui/material/Box";

const style = {
  textAlign: "center",
  color: "secondary.main",
  textShadow: "1px 1px 7px #000",
};

const HomeHero = (props) => {
  const notifyCtx = useContext(NotifyContext);
  // const theme = useTheme();

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <HeroBox sx={{ position: "relative" }}>
      <ContainerUI sx={{ position: "relative" }}>
        <Box
          variant="body1"
          component="p"
          sx={{
            color: "red",
            fontWeight: "bold",
            position: "absolute",
            top: "70px",
            left: "10%",
          }}
        >
          {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
        </Box>
        <Box className="パディングつける用" paddingTop={6} paddingBottom={2}>
          <div className="container"></div>
          <Typography
            variant="h4"
            component="h4"
            paddingTop={1}
            paddingBottom={1}
            sx={style}
          >
            Explore Fresh
          </Typography>
          <HeroSearchBar value={props.value} onChange={props.onChange} />
        </Box>
      </ContainerUI>
    </HeroBox>
  );
};

export default HomeHero;
