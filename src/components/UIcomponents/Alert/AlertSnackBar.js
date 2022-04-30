import * as React from "react";
import { useContext } from "react";
import NotifyContext from "../../../contexts/notify-context";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      sx={{ color: "red", zIndex: "5" }}
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
});

const AlertSnackBar = (props) => {
  const notifyCtx = useContext(NotifyContext);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    notifyCtx.dismissNotification();
    setOpen(false);
  };

  return (
    <Alert
      onClose={handleClose}
      severity={notifyCtx.severity}
      sx={{
        width: "100%",
        bgColor: "background.secondary",
      }}
    >
      {notifyCtx.notificationText}
    </Alert>
  );
};

export default AlertSnackBar;
