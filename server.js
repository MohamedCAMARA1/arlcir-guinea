const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid"); // Import de uuid
require("dotenv").config(); // Assurez-vous d'avoir un fichier .env pour vos clés

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Middleware pour autoriser toutes les requêtes CORS

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Endpoint pour effectuer le paiement
app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  // Test credentials
  const merchantID = process.env.MERCHANT_ID;
  const uniqueID = uuidv4(); // Générer un identifiant unique
  const description = "DON ONG ARLCIR";
  const successReturnUrl = `https://arlcir-guinea-87a974c63eec.herokuapp.com/success-page?uniqueID=${uniqueID}`;
  const cancelReturnUrl = `https://arlcir-guinea-87a974c63eec.herokuapp.com/cancel-page?uniqueID=${uniqueID}`;
  const failureReturnUrl = `https://arlcir-guinea-87a974c63eec.herokuapp.com/failure-page?uniqueID=${uniqueID}`;

  const DevSecretKey = process.env.DEV_SECRET_KEY;
  const ProdSecretKey = process.env.PROD_SECRET_KEY;
  const ProdUrl =
    "https://gn.instantbillspay.com/instantpay/payload/bill/makepayment";
  const TestUrl =
    "https://main.testinstantbillspay.com.ng/instantpay/payload/bill/makepayment";

  const data = {
    email,
    firstname,
    lastname,
    phone,
    merchantID,
    uniqueID,
    description,
    amount,
    successReturnUrl,
    cancelReturnUrl,
    failureReturnUrl,
  };

  try {
    const response = await axios.post(ProdUrl, data, {
      headers: {
        "Content-Type": "application/json",
        "Secret-Key": ProdSecretKey,
      },
    });

    if (response.data && response.data.gateway_url) {
      const gatewayUrl = response.data.gateway_url.replace(
        "http://",
        "https://"
      );
      res.json({ gatewayUrl });
    } else {
      console.error("Payment initialization failed:", response.data);
      res
        .status(response.status)
        .json({ message: "Failed to initialize payment." });
    }
  } catch (error) {
    console.error("Error making payment:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Route pour l'URL racine
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
