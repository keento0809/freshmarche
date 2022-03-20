import * as React from "react";
import Box from "@mui/system/Box";
import ContainerUI from "../Container/ContainerUI";

const ProductsBox = (props) => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", bgcolor: "background.default" }}
      paddingTop={3}
      paddingBottom="53px"
    >
      <ContainerUI>{props.children}</ContainerUI>
    </Box>
  );
};

export default ProductsBox;
