import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const MoveNextButton = (props) => {
  return (
    <Button
      variant="contained"
      startIcon={props.label === "ADDTOCART" ? <AddShoppingCartIcon /> : ""}
      sx={{
        width: "95%",
        borderRadius: "50px",
        bgcolor: "background.paper",
        padding: "0.7rem 0",
        "&.MuiButtonBase-root:hover": {
          bgcolor: "background.paper",
        },
      }}
      component={RouterLink}
      to={props.link}
      // test
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default MoveNextButton;
