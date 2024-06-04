const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Endpoint pour effectuer le paiement
app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  const merchantID = "GN1300014"; // Assurez-vous que l'ID est correct
  const uniqueID = "167889396"; // Assurez-vous que l'ID unique est correct
  const description = "DON ONG ARLCIR";
  const returnUrl = "https://arlcir-guinea-87a974c63eec.herokuapp.com"; // Assurez-vous que l'URL est correcte

  const secretKey = "b4566c050d8737327e8e530ef209586a0bd91d13";

  // Création du string à hacher
  const stringToHash = `${email}${firstname}${lastname}${merchantID}${uniqueID}${amount}`;

  // Génération du hash
  const hash = crypto
    .createHmac("sha512", secretKey)
    .update(stringToHash)
    .digest("hex");

  console.log("String to hash:", stringToHash);
  console.log("Generated hash:", hash);

  // Données à envoyer
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
      "https://gn.instantbillspay.com/instantpay/payload/bill/makepayment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Secret-Key": secretKey, // Envoi du Secret-Key comme en-tête
        },
      }
    );
    res.json(response.data);
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
