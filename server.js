require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());

// Servir les fichiers statiques de l'application React
app.use(express.static(path.join(__dirname, "build")));

// Test credentials
const merchantID = "GN1300014";
const uniqueID = uuidv4();
const description = "DON ONG ARLCIR";
const successReturnUrl = "https://arlcir-guinea-87a974c63eec.herokuapp.com/";
const cancelReturnUrl = "https://arlcir-guinea-87a974c63eec.herokuapp.com/";
const failureReturnUrl = "https://arlcir-guinea-87a974c63eec.herokuapp.com/";
const devSecretKey = process.env.API_TEST_SECRET_KEY;
const prodSecretKey = process.env.API_PROD_SECRET_KEY;
const production_URL = process.env.API_PRODUCTION_URL;
const developpement_URL = process.env.API_TEST_URL;

// Route POST pour initier un paiement
app.post("/api/makepayment", async (req, res) => {
  // const paymentDetails = {
  //   ...req.body,
  //   uniqueID: uuidv4(),
  //   description: "Test Payment",
  //   returnUrl: req.body.returnUrl,
  //   failUrl: req.body.failUrl,
  //   cancelUrl: req.body.cancelUrl,
  // };

  const paymentDetails = {
    ...req.body,
    merchantID,
    uniqueID,
    description,
    successReturnUrl,
    cancelReturnUrl,
    failureReturnUrl,
  };
  try {
    const response = await axios.post(
      production_URL,
      paymentDetails,

      {
        headers: {
          "Content-Type": "application/json",
          "Secret-Key": prodSecretKey,
        },
      }
    );

    if (response.data && response.status === 200) {
      const gatewayUrl = response.data.gateway_url.replace(
        "http://",
        "https://"
      );
      res.json({ gatewayUrl });
    } else {
      console.error("Payment initialization failed:", response.data);
      res.status(response.status).json({ message: response.data.message });
    }
  } catch (error) {
    console.error("Error making payment:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// Pour toutes les autres requêtes, retourner l'application React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
