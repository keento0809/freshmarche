import * as React from "react";
import Box from "@mui/system/Box";

const ProductsBox = (props) => {
  return (
    <Box sx={{ width: "100%", height: "450px", bgcolor: "violet" }}>
      {props.children}
    </Box>
  );
};

export default ProductsBox;
