import { Fragment } from "react";
import SecondHeader from "../components/Header/SecondHeader";
import MainFooter from "../components/Footer/MainFooter";
import OrderSummaryComponent from "../components/Checkout/OrderSummaryComponent";

const OrderSummary = () => {
  return (
    <Fragment>
      <SecondHeader />
      <OrderSummaryComponent />
      <MainFooter />
    </Fragment>
  );
};

export default OrderSummary;
