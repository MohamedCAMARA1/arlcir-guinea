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

  console.log("Data to be sent to payment API:", data);

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

    console.log("Response from payment API:", response.data);

    // Check if the response contains HTML code
    if (response.data && response.data.html) {
      // Send the HTML response to the client for display
      res.send(response.data.html);
    } else {
      console.error("Invalid response structure:", response.data);
      res
        .status(500)
        .json({ message: "Invalid response from payment gateway" });
    }
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
