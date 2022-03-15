import * as React from "react";
import Box from "@mui/system/Box";
import ContainerUI from "../Container/ContainerUI";

const ProductsBox = (props) => {
  return (
    <Box
      sx={{ width: "100%", height: "450px", bgcolor: "background.default" }}
      paddingTop={3}
      paddingBottom={3}
    >
      <ContainerUI>{props.children}</ContainerUI>
    </Box>
  );
};

export default ProductsBox;
