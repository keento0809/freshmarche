import React, { Fragment } from "react";
import AppBarUI from "../UIcomponents/Header/AppBarUI";

const MainHeader = (props) => {
  return (
    <Fragment>
      <AppBarUI isHome={props.isHome} />
    </Fragment>
  );
};

export default MainHeader;
