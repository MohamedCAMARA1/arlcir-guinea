const express = require("express");
const axios = require("axios");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

app.post("/api/makepayment", async (req, res) => {
  const { email, firstname, lastname, phone, amount } = req.body;

  const data = {
    email,
    firstname,
    lastname,
    phone,
    merchantID: "GN1300014",
    uniqueID: "888484488",
    description: "Donation",
    amount,
    returnUrl: req.headers.origin,
    hash: "54baaad4453f623198eda36fd6bfadaa1e7719dfd386b7aba6f2658d63238e1a0e7d1233472f5cfacbb37a658eaf5b", // Calculer le hash HMAC
  };

  try {
    const response = await axios.post(
      "https://main.testinstantbillspay.com.ng/instantpay/payload/bill/makepayment",
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
    res
      .status(error.response ? error.response.status : 500)
      .json({ message: error.message });
  }
});

// The "catchall" handler: for any request that doesn't match the above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
