import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeAmountButton from "../Buttons/ChangeAmountButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CartContext from "../../../contexts/cart-context";
import FavoriteContext from "../../../contexts/favorite-context";
import NotifyContext from "../../../contexts/notify-context";
// import ChangeAmountButton from "../Buttons/changeAmountButton";

const CartProductUI = (props) => {
  const cartCtx = useContext(CartContext);
  const favoriteCtx = useContext(FavoriteContext);
  const notifyCtx = useContext(NotifyContext);

  // params
  const params = useParams();
  // const linkToProductDetail =

  // const [isFavoriteItem, setIsFavoriteItem] = useState(false);
  const [updatedOrderQuantity, setUpdatedOrderQuantity] = useState(
    props.quantity
  );

  const productInfo = {
    id: props.id,
    name: props.name,
    price: props.price,
    subTotalPrice: props.price * props.quantity,
    quantity: props.quantity,
    isFavorite: props.isFavorite,
  };

  const productInfoSingle = {
    id: props.id,
    name: props.name,
    price: props.price,
    subTotalPrice: props.price,
    quantity: 1,
    isFavorite: props.isFavorite,
  };

  useEffect(() => {
    // test
    console.log(props.isFavorite);
  }, [favoriteCtx.favoriteList]);

  const handleUpdateOrderQuantity = (product, text) => {
    console.log("Updating...???");

    if (text === "plus") console.log("Plus counts.");
    if (text === "minus") console.log("Minus counts.");
  };

  const test1 = () => {
    console.log("test1 ....");
  };

  const test2 = () => {
    console.log("test2 ....");
  };

  const handleDeleteProduct = (productInfo) => {
    console.log("Deleting....");
    if (productInfo.isFavorite) {
      favoriteCtx.removeFromFavoriteList(productInfo.id);
      notifyCtx.notifyNow("Product deleted from FavoriteList.");
    }
  };

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
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            paddingLeft="1rem"
          >
            ${props.subTotalPrice.toFixed(2)}
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
        {props.isFavorite && (
          <Typography
            variant="body2"
            component={RouterLink}
            // to="/"
            to={`/products/${props.id}`}
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <ArrowForwardIosIcon sx={{ width: "0.8rem", height: "0.8rem" }} />{" "}
            {/* I need to add the link jumping to the productDetail page */}
            View Detail
          </Typography>
        )}
        {!props.isFavorite && (
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
          onClick={() => handleDeleteProduct(productInfo)}
        />
      </Box>
    </Box>
  );
};

export default CartProductUI;
