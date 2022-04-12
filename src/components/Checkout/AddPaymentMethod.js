import { useEffect, useState } from "react";
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

// codes regarding stripe
const stripePromise = loadStripe("pk_test_A7jK4iCYHL045qgjjfzAfPxu");

const AddPaymentMethod = () => {
  const [clientSecret, setClientSecret] = useState("");

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
      <TitleUI title="Payment Method" />
      <Box padding="0.5rem 0">
        <CheckoutStepper activeStep={1} />
      </Box>
      {/* original code */}
      {/* {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )} */}
      <App />
      {/* temporary hidden */}
      {/* <Box textAlign="center" marginTop={2}>
        <MoveNextButton label="NEXT" link="/ordersummary" />
      </Box> */}
    </ContainerUI>
  );
};

export default AddPaymentMethod;
