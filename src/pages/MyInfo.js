import React, { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import MyInfoComponent from "../components/MyInfo/MyInfoComponent";

const MyInfo = () => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <MyInfoComponent />
      <MainFooter />
    </Fragment>
  );
};

export default MyInfo;
