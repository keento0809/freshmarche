import ContainerUI from "../UIcomponents/Container/ContainerUI";
import CartSummaryComponent from "./CartSummaryComponent";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import CarrList from "./CartList";
import CartList from "./CartList";

const MyCartComponent = () => {
  return (
    <ContainerUI>
      <Box textAlign="center" padding="1rem 0">
        <Typography variant="h4" component="h4" color="secondary">
          My Cart
        </Typography>
      </Box>
      <CartList />
      <CartSummaryComponent />
    </ContainerUI>
  );
};

export default MyCartComponent;
