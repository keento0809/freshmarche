import { Link as RouterLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../contexts/cart-context";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoveNextButton from "../Buttons/MoveNextButton";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material";

const CartSummaryUI = (props) => {
  const cartCtx = useContext(CartContext);

  const history = useHistory();

  // test
  const [displayTotalPrice, setDisplayTotalPrice] = useState(
    cartCtx.totalPrice
  );
  const [isProcessing, setIsProcessing] = useState(false);

  let confirmationTotalPrice;
  let isPlaceOrder;
  let linkValue;
  let isCartInfo;
  // let displayTotalPrice;

  // test
  useEffect(() => {
    if (Boolean(localStorage.getItem("cartInfo"))) {
      isCartInfo = Boolean(localStorage.getItem("cartInfo"));
      const data = localStorage.getItem("cartInfo");
      console.log(JSON.parse(data).cartTotalPrice);
      confirmationTotalPrice = JSON.parse(data).cartTotalPrice;
    }
    setDisplayTotalPrice(
      Boolean(localStorage.getItem("cartInfo"))
        ? confirmationTotalPrice
        : cartCtx.totalPrice
    );
    // test
    // isPlaceOrder = props.label === "PLACE ORDER" ? true : false;
    // console.log(isPlaceOrder);
    // if (!isPlaceOrder && displayTotalPrice > 0) {
    //   linkValue = props.link;
    // } else if (isPlaceOrder && displayTotalPrice > 0) {
    //   linkValue = "";
    // } else {
    //   linkValue = "/";
    // }
    // console.log(linkValue);
  }, []);

  const theme = useTheme();

  const handleProcedure = () => {
    // original code
    // if (cartCtx.totalPrice === 0) {
    if (displayTotalPrice === 0) {
      alert("Invalid checkout. Please add products to cart.");
      console.log("something's wrong");
      return;
    }
    if (props.label === "PLACE ORDER") {
      setIsProcessing(true);
      setTimeout(() => {
        console.log("delaying place order");
        history.replace("/complete");
      }, 2000);
    }
  };

  return (
    <Box sx={{ pt: "1.7rem", pb: "64px" }}>
      <Box
        margin="0 auto"
        sx={{ width: "90%", [theme.breakpoints.up("sm")]: { width: "100%" } }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p" color="white">
            Sub-total
          </Typography>
          <Typography variant="body1" component="p" color="white">
            {/* original code */}
            {/* ${cartCtx.totalPrice} */}
            {/* test */}${displayTotalPrice}
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
            {/* original code */}
            {/* ${cartCtx.totalPrice} */}
            {/* test */}${displayTotalPrice}
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center" mt={3} mb={8}>
        <MoveNextButton
          label={props.label}
          // original code
          // link={props.link}
          link={displayTotalPrice > 0 ? props.link : "/"}
          onClick={handleProcedure}
        />
      </Box>
    </Box>
  );
};

export default CartSummaryUI;
