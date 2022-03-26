import * as React from "react";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../../contexts/cart-context";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { hover } from "@testing-library/user-event/dist/hover";

const ChangeAmountButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [itemInfo, setItemInfo] = useState({});
  const [displayQuantity, setDisplayQuantity] = useState(props.quantity);

  const handleAddProductOne = () => {
    if (props.quantity > 9) {
      alert("You can add cart ten at the maximum.");
      return;
    }
    console.log(props.quantity);
    props.onClick(props.quantity + 1);
    // console.log(product);
    // cartCtx.addToCart(product);
    if (props.isAddCartPushed) {
      setDisplayQuantity(1);
      props.onClick(2);
    }
    console.log("regulation would be working...");
    if (props.onCheck) props.onCheck(false);
  };

  const handleSubtractProductOne = () => {
    if (props.quantity < 2) {
      alert("You cannot subtract this product more.");
      return;
    }
    props.onClick(props.quantity - 1);
    if (props.isAddCartPushed) {
      setDisplayQuantity(1);
      props.onClick(2);
    }
    // cartCtx.subtractFromCart(props.productInfo);
    // console.log("test");
    if (props.isAddCartPushed) setDisplayQuantity(1);
    props.onCheck(false);
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
      startIcon={<RemoveIcon onClick={handleSubtractProductOne} />}
      endIcon={
        <AddIcon onClick={() => handleAddProductOne(props.productInfo)} />
      }
      sx={{
        width: "50%",
        borderRadius: "50px",
        justifyContent: "space-around",
        bgcolor: "background.secondary",
        color: "text.primary",
        hover: "background.secondary",
      }}
    >
      {/* default code. Do not delete! */}
      {/* {props.quantity} */}
      {displayQuantity}
    </Button>
  );
};

export default ChangeAmountButton;
