import React from "react";
import ProductsBox from "../UIcomponents/Products/ProductsBox";
import Typography from "@mui/material/Typography";
import ProductList from "./ProductsList";

const HomeProducts = (props) => {
  return (
    <ProductsBox>
      <Typography
        variant="h4"
        component="h4"
        color="primary"
        textAlign="center"
        sx={{ textShadow: "1px 1px 7px #000", paddingBottom: "0.5rem" }}
      >
        Products
      </Typography>
      <ProductList value={props.value} />
    </ProductsBox>
  );
};

export default HomeProducts;
