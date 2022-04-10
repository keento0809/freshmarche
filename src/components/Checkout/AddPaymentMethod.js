import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import App from "../../stripe/App";

const AddPaymentMethod = () => {
  return (
    <ContainerUI>
      <TitleUI title="Payment Method" />
      <Box padding="0.5rem 0">
        <CheckoutStepper activeStep={1} />
      </Box>
      {/* test */}
      <App />
      <Box textAlign="center" marginTop={2}>
        <MoveNextButton label="NEXT" link="/ordersummary" />
      </Box>
    </ContainerUI>
  );
};

export default AddPaymentMethod;
