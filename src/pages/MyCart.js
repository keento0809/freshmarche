import React, { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import MyCartComponent from "../components/MyCart/MyCartComponent";

const MyCart = () => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <MyCartComponent />
      <MainFooter />
    </Fragment>
  );
};

export default MyCart;
