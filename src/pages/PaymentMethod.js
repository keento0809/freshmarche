import { Fragment } from "react";
import AddPaymentMethod from "../components/Checkout/AddPaymentMethod";
import MainFooter from "../components/Footer/MainFooter";
import MainHeader from "../components/Header/MainHeader";

const PaymentMethod = () => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <AddPaymentMethod />
      <MainFooter />
    </Fragment>
  );
};

export default PaymentMethod;
