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

  // console.log(props.quantity);

  const handleAddProductOne = () => {
    if (props.quantity > 9) {
      alert("You can add cart ten at the maximum.");
      return;
    }
    // change the quantity of product on productDetail page
    props.onClick(props.quantity + 1);
    setDisplayQuantity(displayQuantity + 1);

    // change the quantity of cartProduct on cartList
    if (props.productInfoSingle) cartCtx.addToCart(props.productInfoSingle);

    if (props.isAddCartPushed) {
      setDisplayQuantity(1);
      props.onClick(2);
    }
    if (props.onCheck) props.onCheck(false);
  };

  const handleSubtractProductOne = () => {
    if (props.quantity < 2) {
      alert("You cannot subtract this product more.");
      return;
    }

    // change the quantity of product on productDetail page
    props.onClick(props.quantity - 1);
    setDisplayQuantity(displayQuantity - 1);

    // change the quantity of cartProduct on cartList
    if (props.productInfoSingle) cartCtx.subtractFromCart(props.productInfo);

    if (props.isAddCartPushed) {
      setDisplayQuantity(1);
      props.onClick(2);
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
        // original code. Do not delete!!
        <RemoveIcon
          onClick={() => handleSubtractProductOne(props.productInfo)}
        />
      }
      endIcon={
        // original code. Do not delete!!
        <AddIcon onClick={() => handleAddProductOne(props.productInfo)} />
      }
      sx={{
        // original code
        width: "50%",
        // width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "40%",
        },
        [theme.breakpoints.up(900)]: {
          width: "25%",
        },
        [theme.breakpoints.up(1300)]: {
          width: "22%",
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
      {/* default code. Do not delete! */}
      {/* {props.quantity} */}
      {displayQuantity}
    </Button>
  );
};

export default ChangeAmountButton;
