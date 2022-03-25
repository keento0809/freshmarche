import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeAmountButton from "../Buttons/ChangeAmountButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ChangeAmountButton from "../Buttons/changeAmountButton";

const CartProductUI = (props) => {
  const [isFavoriteItem, setIsFavoriteItem] = useState(false);

  useEffect(() => {
    // test
    setIsFavoriteItem(true);
  }, []);

  const handleClick = (value) => {
    props.onClick(value);
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
            {/* Product A */}
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
            {/* $10.99 */}${props.price}
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
        {!isFavoriteItem && <ChangeAmountButton sx={{ width: "80%" }} />}
        <DeleteIcon
          color="text.primary"
          onClick={() => handleClick(props.id)}
        />
      </Box>
    </Box>
  );
};

export default CartProductUI;
