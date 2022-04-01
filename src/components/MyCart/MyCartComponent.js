import ContainerUI from "../UIcomponents/Container/ContainerUI";
import CartSummaryComponent from "./CartSummaryComponent";
import TitleUI from "../UIcomponents/Title/TitleUI";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import CartList from "./CartList";

const MyCartComponent = () => {
  return (
    <ContainerUI>
      <TitleUI title="My Cart" />
      <CheckoutStepper activeStep={0} />
      <CartList />
      <CartSummaryComponent />
    </ContainerUI>
  );
};

export default MyCartComponent;
