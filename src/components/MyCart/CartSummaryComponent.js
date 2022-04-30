import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/cart-context";
import CartSummaryUI from "../UIcomponents/Cart/CartSummaryUI";

const CartSummaryComponent = () => {
  const cartCtx = useContext(CartContext);

  return (
    <CartSummaryUI
      label="CHECKOUT"
      link={"/payment"}
      isOrderSummary={false}
      deliveryFee={0}
    />
  );
};

export default CartSummaryComponent;
