import * as React from "react";
import Button from "@mui/material/Button";

const MoveNextButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "95%",
        borderRadius: "50px",
        bgcolor: "background.paper",
        padding: "0.7rem 0",
      }}
    >
      {props.label}
    </Button>
  );
};

export default MoveNextButton;
