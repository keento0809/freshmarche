import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/lab";

const AlertSnackBar = (props) => {
  const { notify, setNotify } = props;
  return (
    <Snackbar>
      <Alert></Alert>
    </Snackbar>
  );
};

export default AlertSnackBar;
