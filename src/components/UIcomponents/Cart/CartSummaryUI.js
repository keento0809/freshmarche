import { Link as RouterLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../contexts/cart-context";
import CheckoutContext from "../../../contexts/checkout-context";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoveNextButton from "../Buttons/MoveNextButton";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material";

const CartSummaryUI = (props) => {
  const cartCtx = useContext(CartContext);
  const checkoutCtx = useContext(CheckoutContext);

  const history = useHistory();

  const [displayTotalPrice, setDisplayTotalPrice] = useState(
    cartCtx.totalPrice
  );

  let confirmationTotalPrice;
  let isCartInfo;

  useEffect(() => {
    if (props.isOrderSummary) {
      if (Boolean(localStorage.getItem("cartInfo"))) {
        isCartInfo = Boolean(localStorage.getItem("cartInfo"));
        const data = localStorage.getItem("cartInfo");
        confirmationTotalPrice = JSON.parse(data).cartTotalPrice;
      }
      setDisplayTotalPrice(
        Boolean(localStorage.getItem("cartInfo"))
          ? confirmationTotalPrice
          : cartCtx.totalPrice
      );
    }
    if (!props.isOrderSummary) {
      setDisplayTotalPrice(cartCtx.totalPrice);
    }
  }, [cartCtx.totalPrice]);

  const theme = useTheme();

  const handleProcedure = () => {
    if (props.label === "CHECKOUT") {
      checkoutCtx.setCheckedOut();
    }
    if (displayTotalPrice === 0) {
      alert("Invalid checkout. Please add products to cart.");
      return;
    }
  };

  const setPb = props.isOrderSummary ? 0 : "64px";

  return (
    <Box sx={{ pt: "1.7rem", pb: setPb, maxWidth: "550px", mx: "auto" }}>
      <Box
        margin="0 auto"
        sx={{ width: "90%", [theme.breakpoints.up("sm")]: { width: "100%" } }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p" color="white">
            Sub-total
          </Typography>
          <Typography variant="body1" component="p" color="white">
            ${displayTotalPrice}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p" color="white">
            Delivery
          </Typography>
          <Typography variant="body1" component="p" color="white">
            ${props.deliveryFee}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4" component="h4" color="white">
            Total
          </Typography>
          <Typography variant="h4" component="h4" color="white">
            ${displayTotalPrice}
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center" mt={3} mb={8}>
        <MoveNextButton
          label={props.label}
          link={
            displayTotalPrice > 0 || props.label === "PLACE ORDER"
              ? props.link
              : "/"
          }
          onClick={handleProcedure}
        />
      </Box>
    </Box>
  );
};

export default CartSummaryUI;
