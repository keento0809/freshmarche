import { useEffect, useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import CheckoutStepper from "../UIcomponents/Checkout/Stepper";
import Stripe from "../../stripe/Stripe";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const AddPaymentMethod = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [isProcess, setIsProcess] = useState(false);

  const cartCtx = useContext(CartContext);

  const theme = useTheme();

  useEffect(() => {
    const cartInfo = {
      cartList: cartCtx.cartList,
      cartTotalPrice: cartCtx.totalPrice,
      cartTotalQuantity: cartCtx.totalQuantity,
    };
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
      <Box
        padding="0.5rem 0"
        sx={{
          [theme.breakpoints.up(900)]: { width: "75%", mx: "auto" },
          [theme.breakpoints.up(1300)]: { width: "60%", mx: "auto" },
        }}
      >
        <CheckoutStepper activeStep={1} />
        {/* test */}
        <Box
          className="stripe-wrapper"
          sx={{
            minHeight: "477px",
            [theme.breakpoints.up("sm")]: { minHeight: "417px" },
            [theme.breakpoints.up("md")]: { minHeight: "427px" },
          }}
        >
          <Box py={4}>
            <Stripe />
          </Box>
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
            ※Since this checkout form is dummy,
          </Typography>
          <Typography
            variant="body1"
            component="h5"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            please enter the credit card information below.
          </Typography>
          <Box
            sx={{
              mt: 4,
              padding: "0.5rem 1.2rem",
              border: "1px solid #76FF03",
              borderRadius: "8px",
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
      </Box>
    </ContainerUI>
  );
};

export default AddPaymentMethod;
