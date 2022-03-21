import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import CartSummaryUI from "../UIcomponents/Cart/CartSummaryUI";

const OrderSummaryComponent = () => {
  return (
    <ContainerUI>
      <TitleUI title="Order Summary" />
      <Box padding="0.5rem 0">
        <CheckoutStepper />
      </Box>
      <CartSummaryUI label="PLACE ORDER" />
    </ContainerUI>
  );
};

export default OrderSummaryComponent;
