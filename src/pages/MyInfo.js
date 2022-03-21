import React, { Fragment } from "react";
import SecondHeader from "../components/Header/SecondHeader";
import MainFooter from "../components/Footer/MainFooter";
import MyInfoComponent from "../components/MyInfo/MyInfoComponent";

const MyInfo = () => {
  return (
    <Fragment>
      <SecondHeader />
      <MyInfoComponent />
      <MainFooter />
    </Fragment>
  );
};

export default MyInfo;
