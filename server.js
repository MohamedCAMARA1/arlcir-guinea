import DonationForm from "./src/DonationForm";
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint pour effectuer le paiement
app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  const data = {
    email,
    firstname,
    lastname,
    phone,
    merchantID: "NG0700144",
    uniqueID: "247483395",
    description: "Test description",
    amount,
    successReturnUrl: "https://xyz.com/success-page",
    cancelReturnUrl: "https://xyz.com/cancel-page",
    failureReturnUrl: "https://xyz.com/failure-page",
  };

  try {
    const response = await axios.post(
      "https://main.testinstantbillspay.com.ng/instantpay/payload/bill/makepayment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Secret-Key": "99f3d937d8043faaa6b2c346dfcddbc41b269cef",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour l'URL racine
app.get("/", (req, res) => {
  res.send(<DonationForm />);
  //   res.send("Welcome to the Donation App");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
