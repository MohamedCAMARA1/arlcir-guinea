const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");
const cheerio = require("cheerio"); // Module pour manipuler les données HTML

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React-App
app.use(express.static(path.join(__dirname, "build")));

// Endpoint pour effectuer le paiement
app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  const merchantID = "GN1300014";
  const uniqueID = "167889396";
  const description = "DON ONG ARLCIR";
  const returnUrl = "https://arlcir-guinea-87a974c63eec.herokuapp.com";
  const secretKey = "b4566c050d8737327e8e530ef209586a0bd91d13";

  const stringToHash = `${email}${firstname}${lastname}${merchantID}${uniqueID}${amount}`;
  const hash = crypto
    .createHmac("sha512", secretKey)
    .update(stringToHash)
    .digest("hex");

  const data = {
    email,
    firstname,
    lastname,
    phone,
    merchantID,
    uniqueID,
    description,
    amount,
    returnUrl,
    hash,
  };

  try {
    const response = await axios.post(
      "https://gn.instantbillspay.com/instantpay/payload/bill/payment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Utiliser Cheerio pour extraire l'URL de redirection de la réponse HTML
    const $ = cheerio.load(response.data);
    const paymentUrl = $("form").attr("action");

    // Rediriger l'utilisateur vers l'URL de paiement
    res.redirect(paymentUrl);
  } catch (error) {
    console.error(
      "Error making payment:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ message: error.response ? error.response.data : error.message });
  }
});

// Route pour l'URL racine
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
