import * as React from "react";
import { useState, useContext } from "react";
import CartContext from "../../../contexts/cart-context";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { hover } from "@testing-library/user-event/dist/hover";

const ChangeAmountButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [itemInfo, setItemInfo] = useState({});

  const handleAddProductOne = (product) => {
    props.onClick(props.quantity + 1);
    // console.log(product);
    cartCtx.addToCart(product);
  };
  const handleSubtractProductOne = () => {
    props.onClick(props.quantity - 1);
    cartCtx.subtractFromCart(props.productInfo);
    // console.log("test");
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
      {props.quantity}
    </Button>
  );
};

export default ChangeAmountButton;
