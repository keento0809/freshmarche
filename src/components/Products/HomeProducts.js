import React from "react";
import ProductsBox from "../UIcomponents/Products/ProductsBox";
import Typography from "@mui/material/Typography";

const HomeProducts = () => {
  return (
    <ProductsBox>
      <Typography variant="h4" component="h4">
        Products
      </Typography>
      <p>I'm gonna display products here.</p>
    </ProductsBox>
  );
};

export default HomeProducts;
