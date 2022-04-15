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

// #3E2723

const HomeHero = (props) => {
  const notifyCtx = useContext(NotifyContext);
  const theme = useTheme();

  const style = {
    textAlign: "center",
    color: "secondary.main",
    textShadow: "1px 1px 7px #000",
    [theme.breakpoints.up(900)]: {
      textAlign: "left",
      paddingLeft: "1.5rem",
      fontSize: "2rem",
    },
  };

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <HeroBox sx={{ position: "relative" }}>
      <ContainerUI sx={{ position: "relative" }}>
        <Box
          variant="body1"
          component="p"
          // test
          sx={{
            // original code
            // color: "red",
            // fontWeight: "bold",
            // width: "95%",
            // mx: "auto",
            // position: "fixed",
            // left: "2%",
            // test
            fontWeight: "bold",
            width: "95%",
            mx: "auto",
            position: "fixed",
            bottom: "90px",
            [theme.breakpoints.up("md")]: {
              bottom: "20px",
            },
            left: "2%",
          }}
        >
          {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
        </Box>
        <Box
          className="パディングつける用"
          paddingTop={6}
          paddingBottom={2}
          // paddingTop:"",paddingBottom:""
          sx={{
            textAlign: "left",
            [theme.breakpoints.up("sm")]: { paddingTop: 13, paddingBottom: 4 },
            [theme.breakpoints.up(900)]: { paddingTop: 18, paddingBottom: 4 },
          }}
        >
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
