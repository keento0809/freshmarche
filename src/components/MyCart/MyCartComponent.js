import { useContext, useEffect } from "react";
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

  useEffect(() => {
    if (Boolean(localStorage.getItem("cartInfo")))
      localStorage.removeItem("cartInfo");
  }, []);

  return (
    <ContainerUI>
      <TitleUI title="My Cart" />
      <Box
        sx={{
          [theme.breakpoints.up(900)]: { width: "75%", mx: "auto" },
          [theme.breakpoints.up(1300)]: { width: "60%", mx: "auto" },
        }}
      >
        <CheckoutStepper activeStep={0} />
        <CartList />
        <CartSummaryComponent />
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          width: "95%",
          mx: "auto",
          position: "fixed",
          bottom: "100px",
          left: "2%",
        }}
      >
        {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
      </Box>
    </ContainerUI>
  );
};

export default MyCartComponent;
