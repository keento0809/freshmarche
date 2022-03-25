import * as React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = (props) => {
  return (
    <Button
      variant="contained"
      startIcon={<AddShoppingCartIcon />}
      sx={{
        width: "95%",
        borderRadius: "50px",
        bgcolor: "background.paper",
        padding: "0.7rem 0",
      }}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default AddToCartButton;
