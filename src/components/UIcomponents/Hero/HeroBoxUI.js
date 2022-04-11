import * as React from "react";
import Box from "@mui/system/Box";
import HeroImage from "../../../assets/images/jakub-kapusnak-vnNFWKY7Tj4-unsplash.jpg";
import { useTheme } from "@mui/material";

const HeroBox = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "background.paper",
        bgcolor: props.bgColor,
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        [theme.breakpoints.up("sm")]: { minHeight: "250px" },
        [theme.breakpoints.up(900)]: {
          minHeight: "350px",
          // backgroundPosition: "center center",
        },
        [theme.breakpoints.up(1300)]: {
          backgroundPosition: "top 25% left 50%",
        },
        // option
        textAlign: "center",
      }}
      margin={props.margin}
      paddingTop={1}
      paddingBottom={1}
    >
      {props.children}
    </Box>
  );
};

export default HeroBox;
