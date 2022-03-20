import React, { Fragment } from "react";
import SecondHeader from "../components/Header/SecondHeader";
import MainFooter from "../components/Footer/MainFooter";
import MyCartComponent from "../components/MyCart/MyCartComponent";

const MyCart = () => {
  return (
    <Fragment>
      <SecondHeader />
      <MyCartComponent />
      <MainFooter />
    </Fragment>
  );
};

export default MyCart;
