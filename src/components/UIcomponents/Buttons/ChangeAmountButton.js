import * as React from "react";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../../contexts/cart-context";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material";

const ChangeAmountButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [itemInfo, setItemInfo] = useState({});
  const [displayQuantity, setDisplayQuantity] = useState(props.quantity);

  const theme = useTheme();

  const handleAddProductOne = () => {
    if (props.isInProductDetail && props.quantity > 9) {
      alert("You can add cart ten at the maximum.");
      return;
    }
    // change the quantity of product on productDetail page
    props.onClick(props.quantity + 1);
    setDisplayQuantity(displayQuantity + 1);
    // change the quantity of cartProduct on cartList
    if (props.productInfoSingle) cartCtx.addToCart(props.productInfoSingle);

    if (props.isAddCartPushed) {
      if (props.isInProductDetail) {
        setDisplayQuantity(1);
        props.onClick(2);
      }
    }
    if (props.onCheck) props.onCheck(false);
  };

  const handleSubtractProductOne = () => {
    if (props.isInProductDetail && props.quantity < 2) {
      alert("You cannot subtract this product more.");
      return;
    }

    // change the quantity of product on productDetail page
    props.onClick(props.quantity - 1);
    setDisplayQuantity(displayQuantity - 1);
    // change the quantity of cartProduct on cartList
    if (props.productInfoSingle)
      cartCtx.subtractFromCart(props.productInfoSingle);

    if (props.isAddCartPushed) {
      if (props.isInProductDetail) {
        setDisplayQuantity(1);
        props.onClick(2);
      }
    }

    if (props.isAddCartPushed) setDisplayQuantity(1);
    if (props.onCheck) props.onCheck(false);
  };

  const buttonStyle = {
    width: "50%",
    borderRadius: "50px",
    justifyContent: "space-around",
    bgcolor: "background.secondary",
    color: "text.primary",
    "&:hover": "background.secondary",
  };

  return (
    <Button
      variant="contained"
      startIcon={
        <RemoveIcon
          onClick={() => handleSubtractProductOne(props.productInfo)}
        />
      }
      endIcon={
        <AddIcon onClick={() => handleAddProductOne(props.productInfo)} />
      }
      sx={{
        width: "50%",
        [theme.breakpoints.up("sm")]: {
          width: "40%",
        },
        maxWidth: "400px",
        borderRadius: "50px",
        justifyContent: "space-around",
        color: "text.primary",
        transition: "all 0.2s ease",
        "&.MuiButtonBase-root:hover": {
          bgcolor: "#89fc3a",
          transform: "scale(1.02)",
        },
      }}
    >
      {displayQuantity}
    </Button>
  );
};

export default ChangeAmountButton;
