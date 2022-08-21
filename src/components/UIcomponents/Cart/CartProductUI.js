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
import { styled } from "@mui/system";

const CartProductUI = (props) => {
  const cartCtx = useContext(CartContext);
  const favoriteCtx = useContext(FavoriteContext);
  const notifyCtx = useContext(NotifyContext);

  const params = useParams();

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

  const handleDeleteProduct = (productInfo) => {
    if (productInfo.isFavorite) {
      favoriteCtx.removeFromFavoriteList(productInfo.id);
      notifyCtx.notifyNow("Product deleted from favoriteList.", "warning");
    } else {
      cartCtx.removeFromCart(productInfo.id);
      notifyCtx.notifyNow("Product deleted from your cart.", "warning");
    }
  };

  const handleUpdateQuantity = () => {};

  const ImageComponent = styled("img")({
    display: "inline-block",
    width: "20px",
    height: "auto",
    marginLeft: "0.5rem",
  });

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
          <Typography variant="h5" component="span" color="text.primary">
            {props.name}
          </Typography>
          <ImageComponent src={props.imageUrl} alt="product" />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="h5" component="h5" color="primary">
            {props.quantity} lb
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            sx={{ paddingLeft: "1rem" }}
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
            to={`/products/${props.id}`}
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <ArrowForwardIosIcon sx={{ width: "0.8rem", height: "0.8rem" }} />{" "}
            View Detail
          </Typography>
        )}
        {!props.isFavorite && (
          <ChangeAmountButton
            sx={{ width: "80%" }}
            quantity={updatedOrderQuantity}
            onClick={handleUpdateQuantity}
            productInfo={productInfo}
            productInfoSingle={productInfoSingle}
            isInProductDetail={false}
          />
        )}
        <DeleteIcon
          color="text.primary"
          sx={{ cursor: "pointer" }}
          onClick={() => handleDeleteProduct(productInfo)}
        />
      </Box>
    </Box>
  );
};

export default CartProductUI;
