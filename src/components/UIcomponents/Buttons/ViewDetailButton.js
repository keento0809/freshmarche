import * as React from "react";
import Button from "@mui/material/Button";
import { padding } from "@mui/system";

const ViewDetailButton = (props) => {
  return (
    <Button sx={{ fontSize: "0.5rem", padding: "2px 8px" }} variant="outlined">
      {props.text}
    </Button>
  );
};

export default ViewDetailButton;
