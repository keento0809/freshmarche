import React from "react";
import ProductsBox from "../UIcomponents/Products/ProductsBox";
import Typography from "@mui/material/Typography";
import ProductList from "./ProductsList";
import { useTheme } from "@mui/material";

const HomeProducts = (props) => {
  const theme = useTheme();

  return (
    <ProductsBox>
      <Typography
        variant="h4"
        component="h4"
        color="primary"
        sx={{
          textAlign: "center",
          textShadow: "1px 1px 7px #000",
          paddingBottom: "0.5rem",
          [theme.breakpoints.up(900)]: {
            textAlign: "left",
            paddingLeft: "2rem",
            fontSize: "2rem",
          },
        }}
      >
        Products
      </Typography>
      <ProductList value={props.value} />
    </ProductsBox>
  );
};

export default HomeProducts;
