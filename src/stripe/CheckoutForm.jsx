import React, { Fragment, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MoveNextButton from "../components/UIcomponents/Buttons/MoveNextButton";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEl, setIsLoadingEl] = useState(true);

  // useEffect(() => {
  //   // test
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     console.log("どこ処理しとるん？？");
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    // setIsLoading(true);

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

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/ordersummary",
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
      {/* {isLoading && isOnReady && (
        <Typography variant="h4" component="h4" color="primary">
          Loading ...
        </Typography>
      )} */}
      <form id="payment-form" onSubmit={handleSubmit}>
        <div>
          {isLoadingEl && (
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                color: "primary.main",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Loading...
              </Typography>
              {/* <Spin size="large" /> */}
            </Box>
          )}
          <PaymentElement
            id="payment-element"
            onReady={() => {
              setIsLoadingEl(false);
            }}
          />
          {!isLoadingEl && (
            <Box sx={{ textAlign: "center", pt: 8 }}>
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
            </Box>
          )}
        </div>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </Fragment>
  );
}
