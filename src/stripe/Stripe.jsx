import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgressUI from "../components/UIcomponents/Progress/CircularProgressUI";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_test_A7jK4iCYHL045qgjjfzAfPxu");

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://server-retry.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data?.clientSecret);
        setIsLoading(false);
      });
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#76ff03",
      colorBackground: "#3f2625",
      colorText: "#ffffff",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripe-form">
      <Box className="stripe-wrapper" width="95%" mx="auto">
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "primary.main",
              minHeight: "300px",
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontWeight: "normal", textAlign: "center", pr: "1rem" }}
            >
              Loading...
            </Typography>
            <CircularProgressUI />
          </Box>
        )}
        {clientSecret && stripePromise && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </Box>
    </div>
  );
}
