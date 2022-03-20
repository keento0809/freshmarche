import * as React from "react";
import Box from "@mui/system/Box";
import ContainerUI from "../Container/ContainerUI";

const MainBoxUI = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "background.default",
        backgroundSize: "cover",
        textAlign: "center",
      }}
      margin={props.margin}
      paddingTop={2}
      paddingBottom={2}
    >
      <ContainerUI>{props.children}</ContainerUI>
    </Box>
  );
};

export default MainBoxUI;
