import * as React from "react";
import Box from "@mui/system/Box";

const HeroBox = (props) => {
  return (
    <Box sx={{ width: "100%", height: "240px", bgcolor: "aquamarine" }}>
      {props.children}
    </Box>
  );
};

export default HeroBox;
