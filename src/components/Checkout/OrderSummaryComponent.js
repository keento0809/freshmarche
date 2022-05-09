import { useEffect, useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import CartSummaryUI from "../UIcomponents/Cart/CartSummaryUI";
import { useTheme } from "@mui/material/styles";
import OrderSummaryList from "../Checkout/OrderSummaryList";
import CircularProgressUI from "../UIcomponents/Progress/CircularProgressUI";

const OrderSummaryComponent = () => {
  const cartCtx = useContext(CartContext);

  const [orderTotalPrice, setOrderTotalPrice] = useState(cartCtx.totalPrice);
  const [isProcessing, setIsProcessing] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setOrderTotalPrice(cartCtx.totalPrice);
  }, [cartCtx.totalPrice]);

  return (
    <ContainerUI>
      <TitleUI title="Order Summary" />
      <Box
        padding="0.5rem 0"
        sx={{
          [theme.breakpoints.up(900)]: { width: "75%", mx: "auto" },
          [theme.breakpoints.up(1300)]: { width: "60%", mx: "auto" },
        }}
      >
        <CheckoutStepper activeStep={2} />
        <OrderSummaryList />
        <CartSummaryUI
          label="PLACE ORDER"
          isOrderSummary={true}
          setIsProcessing={setIsProcessing}
          totalCartPrice={orderTotalPrice.toFixed(2)}
          deliveryFee={0}
          // original
          // link=""
          link="/complete"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isProcessing && <CircularProgressUI />}
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default OrderSummaryComponent;
