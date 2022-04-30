import { useEffect, useState, useContext } from "react";
import ContainerUI from "../components/UIcomponents/Container/ContainerUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoveNextButton from "../components/UIcomponents/Buttons/MoveNextButton";
import imageUrl from "../assets/images/alexander-schimmeck-JS8E0jTQSsM-unsplash.jpg";
import CartContext from "../contexts/cart-context";

const OrderComplete = () => {
  const cartCtx = useContext(CartContext);

  const style = {
    textAlign: "center",
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    paddingBottom: "2rem",
  };

  useEffect(() => {
    if (Boolean(localStorage.getItem("cartInfo")))
      localStorage.removeItem("cartInfo");
    cartCtx.resetCart();
  }, []);

  return (
    <ContainerUI>
      <Box sx={style}>
        {/* test */}
        <Box sx={{ paddingBottom: "2rem" }}>
          <img
            src={`${imageUrl}`}
            alt=""
            width="400px"
            height="auto"
            style={{
              borderRadius: "8px",
              boxShadow: "rgb(255 255 255) 0px 0px 8px 5px",
            }}
          />
        </Box>
        <Typography variant="h5" component="h5" color="primary">
          Your order is successful.
        </Typography>
        <Typography variant="h5" component="h5" color="primary">
          Thank you for choosing us!
        </Typography>
        <Box paddingTop={10}>
          <MoveNextButton
            label="BACK TO TOP"
            link={"/"}
            sx={{ paddingTop: "40px" }}
          />
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default OrderComplete;
