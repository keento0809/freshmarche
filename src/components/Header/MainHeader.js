import React, { Fragment } from "react";
import AppBarUI from "../UIcomponents/Header/AppBarUI";

const MainHeader = (props) => {
  return (
    <Fragment>
      <AppBarUI
        isHome={props.isHome}
        onOpen={props.onOpen}
        onClose={props.onClose}
        onLogin={props.handleLogin}
        onLogOut={props.handleLogout}
      />
    </Fragment>
  );
};

export default MainHeader;
