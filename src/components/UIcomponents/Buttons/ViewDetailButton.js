import * as React from "react";
import Button from "@mui/material/Button";
import { padding } from "@mui/system";

const ViewDetailButton = (props) => {
  return (
    <Button
      sx={{
        display: "block",
        fontSize: "0.5rem",
        padding: "2px 8px",
        color: "text.primary",
        width: "64px",
        margin: "1rem auto 0",
        textAlign: "center",
      }}
      // variant="outlined"
      variant="contained"
      href="#"
    >
      {props.text}
    </Button>
  );
};

export default ViewDetailButton;
