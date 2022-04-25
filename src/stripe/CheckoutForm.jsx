import React, { Fragment, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MoveNextButton from "../components/UIcomponents/Buttons/MoveNextButton";
import CircularProgressUI from "../components/UIcomponents/Progress/CircularProgressUI";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEl, setIsLoadingEl] = useState(true);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    if (clientSecret) console.log("We got the client secret");

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // I need to fix this for production
        // return_url: "http://localhost:3000/ordersummary",
        return_url: "https://freshmarche.vercel.app/ordersummary",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
  };

  return (
    <Fragment>
      <form id="payment-form" onSubmit={handleSubmit}>
        <div>
          {isLoadingEl && (
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
          <PaymentElement
            id="payment-element"
            onReady={() => {
              setIsLoadingEl(false);
            }}
          />
          {!isLoadingEl && (
            <Box
              sx={{
                textAlign: "center",
                pt: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <MoveNextButton
                label="NEXT"
                disabled={isLoading || !stripe || !elements}
                id="submit"
                onClick={handleSubmit}
              >
                <span id="button-text">
                  {isLoading ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    ""
                  )}
                </span>
              </MoveNextButton>
              <Box sx={{ minHeight: "90px" }}>
                {isLoading && (
                  <Box
                    sx={{
                      display: "inline-block",
                      lineHeight: "60px",
                      pt: "0.8rem",
                    }}
                  >
                    <CircularProgressUI />
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </div>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Fragment>
  );
}
