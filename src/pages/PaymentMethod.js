import { Fragment } from "react";
import AddPaymentMethod from "../components/Checkout/AddPaymentMethod";
import MainFooter from "../components/Footer/MainFooter";
import SecondHeader from "../components/Header/SecondHeader";

const PaymentMethod = () => {
  return (
    <Fragment>
      <SecondHeader />
      <AddPaymentMethod />
      <MainFooter />
    </Fragment>
  );
};

export default PaymentMethod;
