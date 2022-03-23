import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

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
      {/* test */}
      {/* <Link to="/">
        <Typography>{props.label}</Typography>
      </Link> */}
    </Button>
  );
};

export default MoveNextButton;
