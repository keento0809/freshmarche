import { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import OrderSummaryComponent from "../components/Checkout/OrderSummaryComponent";

const OrderSummary = () => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <OrderSummaryComponent />
      <MainFooter />
    </Fragment>
  );
};

export default OrderSummary;
