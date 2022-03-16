import React from "react";
import ProductsBox from "../UIcomponents/Products/ProductsBox";
import Typography from "@mui/material/Typography";
import ProductList from "./ProductsList";

const HomeProducts = () => {
  return (
    <ProductsBox>
      <Typography variant="h4" component="h4" color="secondary">
        Products
      </Typography>
      <ProductList />
    </ProductsBox>
  );
};

export default HomeProducts;
