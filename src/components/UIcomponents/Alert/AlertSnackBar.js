import * as React from "react";
import { useContext } from "react";
import NotifyContext from "../../../contexts/notify-context";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertSnackBar = (props) => {
  const notifyCtx = useContext(NotifyContext);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    notifyCtx.dismissNotification();
    setOpen(false);
  };

  return (
    <Stack>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {/* Product successfully added! */}
        {/* {props.label} */}
        {notifyCtx.notificationText}
      </Alert>
    </Stack>
  );
};

export default AlertSnackBar;
