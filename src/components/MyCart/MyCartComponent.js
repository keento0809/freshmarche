import { useContext } from "react";
import NotifyContext from "../../contexts/notify-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import CartSummaryComponent from "./CartSummaryComponent";
import TitleUI from "../UIcomponents/Title/TitleUI";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import CartList from "./CartList";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const MyCartComponent = () => {
  const notifyCtx = useContext(NotifyContext);

  const theme = useTheme();

  return (
    <ContainerUI>
      <TitleUI title="My Cart" />
      <CheckoutStepper activeStep={0} />
      <Box
        sx={{
          [theme.breakpoints.up(900)]: { width: "90%", mx: "auto" },
          [theme.breakpoints.up(1300)]: { width: "80%", mx: "auto" },
        }}
      >
        <CartList />
        <CartSummaryComponent />
      </Box>
      {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
    </ContainerUI>
  );
};

export default MyCartComponent;
