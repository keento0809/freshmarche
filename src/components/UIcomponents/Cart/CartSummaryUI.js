import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddToCartButton from "../Buttons/AddToCartButton";
import MoveNextButton from "../Buttons/MoveNextButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CartSummaryUI = (props) => {
  return (
    <Box padding="2rem 0">
      <Box width="90%" margin="0 auto">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" component="p" color="white">
            Sub-total
          </Typography>
          <Typography variant="body1" component="p" color="white">
            ${props.totalCartPrice}
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
            ${props.totalCartPrice}
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center" marginTop={3}>
        <MoveNextButton label={props.label} link="/ordersummary" />
      </Box>
    </Box>
  );
};

export default CartSummaryUI;
