import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<AddShoppingCartIcon />}
      sx={{ width: "95%", borderRadius: "50px", bgcolor: "background.paper" }}
    >
      ADDTOCART
    </Button>
  );
};

export default AddToCartButton;
