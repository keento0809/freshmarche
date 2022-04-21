import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material/styles";

const MoveNextButton = (props) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      startIcon={props.label === "ADDTOCART" ? <AddShoppingCartIcon /> : ""}
      sx={{
        width: "90%",
        [theme.breakpoints.up("sm")]: {
          width: "70%",
        },
        [theme.breakpoints.up(900)]: {
          width: "45%",
        },
        borderRadius: "50px",
        bgcolor: "background.paper",
        padding: "0.7rem 0",
        transition: "all 0.3s ease",
        "&.MuiButtonBase-root:hover": {
          bgcolor: "background.paper",
          transform: "scale(1.05)",
        },
        borderRadius: "50px",
        bgcolor: "background.paper",
        padding: "0.7rem 0",
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
