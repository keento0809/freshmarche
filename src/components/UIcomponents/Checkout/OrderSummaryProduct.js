import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const OrderSummaryProduct = (props) => {
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
          <Typography variant="h5" component="h5" color="text.main">
            {props.quantity}
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            color="text.main"
            sx={{ paddingLeft: "1rem" }}
          >
            ${props.subTotalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderSummaryProduct;
