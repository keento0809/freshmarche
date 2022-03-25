import ContainerUI from "../components/UIcomponents/Container/ContainerUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoveNextButton from "../components/UIcomponents/Buttons/MoveNextButton";
import SuccessAlert from "../components/UIcomponents/Alert/SuccessAlert";

const OrderComplete = () => {
  const style = {
    textAlign: "center",
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <ContainerUI>
      <Box sx={style}>
        {/* test */}
        <SuccessAlert />
        <Typography variant="h5" component="h5" color="primary">
          Your order is successful.
        </Typography>
        <Typography variant="h5" component="h5" color="primary">
          Thank you for choosing us!
        </Typography>
        <Box paddingTop={10}>
          <MoveNextButton label="BACK TO TOP" />
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default OrderComplete;
