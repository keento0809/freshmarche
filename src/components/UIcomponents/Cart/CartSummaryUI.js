import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddToCartButton from "../Buttons/AddToCartButton";
import { Fragment } from "react";

const CartSummaryUI = () => {
  return (
    <Fragment>
      <Box width="90%" margin="0 auto">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p" color="white">
            Sub-total
          </Typography>
          <Typography variant="body1" component="p" color="white">
            $10.99
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p" color="white">
            Delivery
          </Typography>
          <Typography variant="body1" component="p" color="white">
            Standard(free)
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4" component="h4" color="white">
            Total
          </Typography>
          <Typography variant="h4" component="h4" color="white">
            $10.99
          </Typography>
        </Box>
      </Box>
      <AddToCartButton />
    </Fragment>
  );
};

export default CartSummaryUI;
