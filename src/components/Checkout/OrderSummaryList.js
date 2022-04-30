import React from "react";
import Box from "@mui/material/Box";
import OrderSummaryProduct from "../UIcomponents/Checkout/OrderSummaryProduct";
import { useTheme } from "@mui/material";

const OrderSummaryList = () => {
  const orderSummaryData = JSON.parse(localStorage.getItem("cartInfo"));
  const mapping = orderSummaryData.cartList.map((product, index) => (
    <OrderSummaryProduct
      key={index}
      id={product.id}
      name={product.name}
      price={product.price}
      subTotalPrice={product.subTotalPrice}
      quantity={product.quantity}
      isFavorite={product.isFavorite}
      imageUrl={product.imageUrl}
    />
  ));

  const theme = useTheme();

  return (
    <Box
      sx={{
        color: "primary",
        maxHeight: "390px",
        overflow: "scroll",
        [theme.breakpoints.up("sm")]: { maxHeight: "480px" },
      }}
    >
      {mapping}
    </Box>
  );
};

export default OrderSummaryList;
