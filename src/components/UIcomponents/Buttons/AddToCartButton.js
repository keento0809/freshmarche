import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = () => {
  return (
    <Box
      textAlign="center"
      width="100%"
      lineHeight="1rem"
      // display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Button
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
        sx={{
          display: "inline-block",
          width: "80%",
          borderRadius: "50px",
        }}
      >
        ADDTOCART
      </Button>
    </Box>
  );
};

export default AddToCartButton;
