import { useContext } from "react";
import NotifyContext from "../../contexts/notify-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import CartSummaryComponent from "./CartSummaryComponent";
import TitleUI from "../UIcomponents/Title/TitleUI";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import CartList from "./CartList";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";

const MyCartComponent = () => {
  const notifyCtx = useContext(NotifyContext);

  return (
    <ContainerUI>
      <TitleUI title="My Cart" />
      <CheckoutStepper activeStep={0} />
      <CartList />
      <CartSummaryComponent />
      {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
    </ContainerUI>
  );
};

export default MyCartComponent;
