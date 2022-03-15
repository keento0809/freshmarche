import * as React from "react";
import Box from "@mui/system/Box";
import ContainerUI from "../Container/ContainerUI";

const HeroBox = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "background.paper",
        textAlign: "left",
      }}
      paddingTop={3}
      paddingBottom={3}
    >
      <ContainerUI>{props.children}</ContainerUI>
    </Box>
  );
};

export default HeroBox;
