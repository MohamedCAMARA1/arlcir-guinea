const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

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
  const merchantID = "NG0700144";
  const uniqueID = "34354543";
  const description = "DON ONG ARLCIR";
  const successReturnUrl = "https://xyz.com/success-page";
  const cancelReturnUrl = "https://xyz.com/cancel-page";
  const failureReturnUrl = "https://xyz.com/failure-page";
  const secretKey = "99f3d937d8043faaa6b2c346dfcddbc41b269cef"; // Test

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
    const response = await axios.post(
      "https://main.testinstantbillspay.com.ng/instantpay/payload/bill/makepayment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Secret-Key": secretKey,
        },
      }
    );

    if (response.data) {
      if (response.status === 200) {
        // Extracting the gateway_url from the response
        const gatewayUrl = response.data.gateway_url.replace(
          "http://",
          "https://"
        );

        // Redirect to the gateway URL
        res.redirect(gatewayUrl);
      } else {
        console.error("Payment initialization failed:", response.data);
        res.status(response.status).json({ message: response.data.message });
      }
    } else {
      console.error("Invalid response structure:", response.data);
      res
        .status(500)
        .json({ message: "Invalid response from payment gateway" });
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
