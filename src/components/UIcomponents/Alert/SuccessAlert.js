import * as React from "react";
import Alert from "@mui/material/Alert";

const SuccessAlert = () => {
  return (
    <div>
      <Alert
        severity="success"
        sx={{ width: "95%", margin: "0 auto", borderRadius: "50px" }}
      >
        Your order is successfully done!!
      </Alert>
    </div>
  );
};

export default SuccessAlert;
