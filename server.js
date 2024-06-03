const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto"); // Ajout du module crypto

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Endpoint pour effectuer le paiement
app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  // Création de la chaîne à hacher
  const stringToHash = `${email}${firstname}${lastname}GN1300014347483396${amount}`;

  // Création du hash HMAC-SHA512
  const hash = crypto
    .createHmac("sha512", "b4566c050d87373278530f209586a0bd91d13")
    .update(stringToHash)
    .digest("hex");

  const data = {
    email,
    firstname,
    lastname,
    phone,
    merchantID: "GN1300014",
    uniqueID: "347483396",
    description: "DON ONG",
    amount,
    returnUrl: "https://xyz.com/success-page",
    hash, // Ajout du hash dans les données à envoyer
  };

  try {
    const response = await axios.post(
      "https://gn.instantbillspay.com/instantpay/payload/bill/payment", // Modification de l'URL de l'endpoint
      data
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
