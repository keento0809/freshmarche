const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")("sk_test_Hrs6SAopgFPF0bZXSN3f6ELN");

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

router.get("/", (req, res) => {
  res.send("test");
});

app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);

// app.listen(4242, () => console.log("Node server listening on port 4242!"));

// package.json

// default
// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },

// "homepage": "http://localhost:3000/checkout",
// "proxy": "http://localhost:4242",

// "scripts": {
//   "start-client": "react-scripts start",
//   "start-server": "node server.js",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "start": "concurrently \"yarn start-client\" \"yarn start-server\""
// },
