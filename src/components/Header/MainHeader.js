import React, { Fragment } from "react";
import AppBarUI from "../UIcomponents/Header/AppBarUI";

const MainHeader = (props) => {
  return (
    <Fragment>
      <AppBarUI
        isHome={props.isHome}
        onOpen={props.onOpen}
        onClose={props.onClose}
      />
    </Fragment>
  );
};

export default MainHeader;
