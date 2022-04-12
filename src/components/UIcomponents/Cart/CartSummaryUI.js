import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoveNextButton from "../Buttons/MoveNextButton";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material";

const CartSummaryUI = (props) => {
  const theme = useTheme();

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
      <Box textAlign="center" mt={3} mb={8}>
        <MoveNextButton label={props.label} link={props.link} />
      </Box>
    </Box>
  );
};

export default CartSummaryUI;
