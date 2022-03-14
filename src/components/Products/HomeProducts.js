import React from "react";
import ProductsBox from "../UIcomponents/Products/ProductsBox";
import Typography from "@mui/material/Typography";
import ProductList from "./ProductsList";

const HomeProducts = () => {
  return (
    <ProductsBox>
      <Typography variant="h4" component="h4">
        Products
      </Typography>
      <p>I'm gonna display products here.</p>
      <ProductList />
    </ProductsBox>
  );
};

export default HomeProducts;
