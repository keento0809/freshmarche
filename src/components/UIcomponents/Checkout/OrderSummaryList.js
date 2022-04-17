import React from "react";
import Box from "@mui/material/Box";
import OrderSummaryProduct from "./OrderSummaryProduct";

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
      // test
      imageUrl={product.imageUrl}
    />
  ));

  return <Box sx={{ color: "primary" }}>{mapping}</Box>;
};

export default OrderSummaryList;
