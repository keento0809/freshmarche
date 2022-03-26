import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeAmountButton from "../Buttons/ChangeAmountButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CartContext from "../../../contexts/cart-context";
// import ChangeAmountButton from "../Buttons/changeAmountButton";

const CartProductUI = (props) => {
  const cartCtx = useContext(CartContext);

  const [isFavoriteItem, setIsFavoriteItem] = useState(false);
  const [updatedOrderQuantity, setUpdatedOrderQuantity] = useState(
    props.quantity
  );

  const productInfo = {
    id: props.id,
    name: props.name,
    price: props.price,
    subTotalPrice: props.price * props.quantity,
    quantity: props.quantity,
    isFavoriteItem: props.isFavoriteItem,
  };

  const productInfoSingle = {
    id: props.id,
    name: props.name,
    price: props.price,
    subTotalPrice: props.price,
    quantity: 1,
    isFavoriteItem: props.isFavoriteItem,
  };

  useEffect(() => {
    // test
    setIsFavoriteItem(props.isFavoriteItem);
    // setUpdatedOrderQuantity();
  }, []);

  const handleUpdateOrderQuantity = (product, text) => {
    console.log("Updating...???");
    // temporary
    // cartCtx.addToCart(productInfoSingle);

    if (text === "plus") console.log("Plus counts.");
    if (text === "minus") console.log("Minus counts.");

    // setUpdatedOrderQuantity(props.quantity + 1);
  };

  const test1 = () => {
    console.log("test1 ....");
  };

  const test2 = () => {
    console.log("test2 ....");
  };

  const handleClick = (product) => {};

  return (
    <Box bgcolor="white" borderRadius="12px" margin="1rem 0">
      <Box
        className="firstRow"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="0.5rem 1.2rem"
      >
        <Box>
          <Typography variant="h5" component="h5" color="text.primary">
            {props.name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="h5" component="h5" color="primary">
            {props.quantity}
            {/* {updatedOrderQuantity} */}
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            paddingLeft="1rem"
          >
            ${props.subTotalPrice}
          </Typography>
        </Box>
      </Box>
      <Box
        className="secondRow"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0.5rem 1.2rem"
        bgcolor="background.third"
        borderRadius="12px"
      >
        {isFavoriteItem && (
          <Typography
            variant="body2"
            component={RouterLink}
            to="/products/detail"
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <ArrowForwardIosIcon sx={{ width: "0.8rem", height: "0.8rem" }} />{" "}
            {/* I need to add the link jumping to the productDetail page */}
            View Detail
          </Typography>
        )}
        {!isFavoriteItem && (
          <ChangeAmountButton
            sx={{ width: "80%" }}
            // default code. Do not delete !!
            // quantity={props.quantity}
            quantity={updatedOrderQuantity}
            onClick={handleUpdateOrderQuantity}
            productInfo={productInfo}
            productInfoSingle={productInfoSingle}
          />
        )}
        <DeleteIcon
          color="text.primary"
          onClick={() => handleClick(productInfo)}
        />
      </Box>
    </Box>
  );
};

export default CartProductUI;
