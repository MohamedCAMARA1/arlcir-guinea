const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Endpoint pour effectuer le paiement
app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  const data = {
    email,
    firstname,
    lastname,
    phone,
    merchantID: "GN1300014",
    uniqueID: "247483395",
    description: "Test description",
    amount,
    successReturnUrl: "https://xyz.com/success-page",
    cancelReturnUrl: "https://xyz.com/cancel-page",
    failureReturnUrl: "https://xyz.com/failure-page",
  };

  try {
    const response = await axios.post(
      " https://zm.instantbillspay.com/instantpay/payload/bill/makepayment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Secret-Key": "b4566c050d87373278530f209586a0bd91d13",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour l'URL racine
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
