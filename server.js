const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid"); // Import de uuid
require("dotenv").config();

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
  const successReturnUrl = `${process.env.BASE_URL}/success-page`; // URL de redirection après succès
  const cancelReturnUrl = `${process.env.BASE_URL}/cancel-page`; // URL de redirection après annulation
  const failureReturnUrl = `${process.env.BASE_URL}/failure-page`; // URL de redirection après échec
  // const DevSecretKey = process.env.API_TEST_SECRET_KEY;
  const ProdSecretKey = process.env.API_PROD_SECRET_KEY;
  const ProdUrl = process.env.API_PRODUCTION_URL;
  // const TestUrl = process.env.API_TEST_URL;

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

// Route pour l'URL racine
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
