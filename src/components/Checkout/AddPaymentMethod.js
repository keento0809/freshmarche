import { useEffect, useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import App from "../../stripe/App";

// codes regarding stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../stripe/CheckoutForm";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";

// codes regarding stripe
const stripePromise = loadStripe("pk_test_A7jK4iCYHL045qgjjfzAfPxu");

const AddPaymentMethod = () => {
  const [clientSecret, setClientSecret] = useState("");

  const cartCtx = useContext(CartContext);

  const theme = useTheme();

  // codes regarding stripe
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  useEffect(() => {
    const cartInfo = {
      cartList: cartCtx.cartList,
      cartTotalPrice: cartCtx.totalPrice,
      cartTotalQuantity: cartCtx.totalQuantity,
    };
    console.log(cartInfo);
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#76ff03",
      colorBackground: "#3e2724",
      colorText: "#ffffff",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <ContainerUI>
      <TitleUI title="Add Credit Card" />
      <Box padding="0.5rem 0">
        <CheckoutStepper activeStep={1} />
      </Box>
      <Box py={4}>
        <App />
      </Box>
      <Box
        textAlign="center"
        sx={{
          pt: 4,
          pb: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.up("md")]: {
            pb: 4,
          },
        }}
      >
        <Typography
          variant="body1"
          component="h5"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          ※Since this checkout form is dummy, please enter the credit card
          information below.
        </Typography>
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            component="p"
            fontWeight="normal"
            color="white"
          >
            Card Number - 4242 4242 4242 4242
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontWeight="normal"
            color="white"
          >
            Expiration - 10/25
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontWeight="normal"
            color="white"
          >
            CVC - 999
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontWeight="normal"
            color="white"
          >
            Country - Canada
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontWeight="normal"
            color="white"
          >
            ZIP CODE - M5T 1R4
          </Typography>
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default AddPaymentMethod;
