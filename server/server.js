const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const stripe = require("stripe")("sk_test_Hrs6SAopgFPF0bZXSN3f6ELN");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
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

app.get("/", (req, res) => {
  res.send("test");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Node server listening on ${PORT}!`));
