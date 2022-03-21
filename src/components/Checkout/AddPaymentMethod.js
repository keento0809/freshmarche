import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";

const AddPaymentMethod = () => {
  return (
    <ContainerUI>
      <TitleUI title="Payment Method" />
      <Box padding="2rem 0">
        <CheckoutStepper />
      </Box>
      <Box textAlign="center" marginTop={2}>
        <MoveNextButton label="NEXT" />
      </Box>
    </ContainerUI>
  );
};

export default AddPaymentMethod;
