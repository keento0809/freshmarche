import { useEffect, useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import CartSummaryUI from "../UIcomponents/Cart/CartSummaryUI";

const OrderSummaryComponent = () => {
  const cartCtx = useContext(CartContext);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);

  useEffect(() => {
    setOrderTotalPrice(cartCtx.totalPrice);
  }, [cartCtx.totalPrice]);

  return (
    <ContainerUI>
      <TitleUI title="Order Summary" />
      <Box padding="0.5rem 0">
        <CheckoutStepper />
      </Box>
      <CartSummaryUI
        label="PLACE ORDER"
        totalCartPrice={orderTotalPrice}
        deliveryFee={0}
      />
    </ContainerUI>
  );
};

export default OrderSummaryComponent;
