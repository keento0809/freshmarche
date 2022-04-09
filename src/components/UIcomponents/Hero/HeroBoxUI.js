import * as React from "react";
import Box from "@mui/system/Box";
import ContainerUI from "../Container/ContainerUI";
import HeroImage from "../../../assets/images/jakub-kapusnak-vnNFWKY7Tj4-unsplash.jpg";

const HeroBox = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "background.paper",
        bgcolor: props.bgColor,
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        // option
        // backgroundPosition: "center center",
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
