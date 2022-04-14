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

  // test
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  // test
  useEffect(() => {
    // original code
    // setTotalCartPrice(cartCtx.totalPrice);

    // test
    const initialTotalPrice =
      cartCtx.totalPrice == 0 ? localStorage.getItem("totalCartPrice") : 0;
    console.log(initialTotalPrice);
    setTotalCartPrice(initialTotalPrice);
    // test
    localStorage.setItem("totalCartPrice", cartCtx.totalPrice);
  }, [cartCtx.totalPrice]);

  const theme = useTheme();

  const handleValidate = () => {
    console.log("Validating");
    if (cartCtx.totalQuantity < 1) {
      alert("Invalid checkout. Please add products to cart.");
      return;
    }
  };

  useEffect(() => {
    console.log("re-rendering");
  }, []);

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
            {/* ${props.totalCartPrice} */}
            {/* test */}${totalCartPrice}
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
            {/* ${props.totalCartPrice} */}
            {/* test */}${totalCartPrice}
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center" mt={3} mb={8}>
        <MoveNextButton
          label={props.label}
          // original code
          // link={props.link}
          link={cartCtx.totalQuantity > 0 ? props.link : "/"}
          onClick={handleValidate}
        />
      </Box>
    </Box>
  );
};

export default CartSummaryUI;
