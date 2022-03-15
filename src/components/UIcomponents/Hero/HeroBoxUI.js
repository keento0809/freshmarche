import * as React from "react";
import Box from "@mui/system/Box";
import ContainerUI from "../Container/ContainerUI";
import HeroImage from "../../../assets/images/hero-img-freshmarche.jpg";

const HeroBox = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "background.paper",
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        textAlign: "center",
      }}
      paddingTop={3}
      paddingBottom={3}
    >
      <ContainerUI>{props.children}</ContainerUI>
    </Box>
  );
};

export default HeroBox;
