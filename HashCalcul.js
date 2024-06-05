const crypto = require("crypto");

const email = "customer@example.com";
const firstname = "John";
const lastname = "Doe";
const merchantID = "GN1300014";
const uniqueID = "167889396";
const amount = "200";
const secretKey = "b4566c050d8737327e8e530ef209586a0bd91d13";

// Création du string à hacher
const stringToHash = `${email}${firstname}${lastname}${merchantID}${uniqueID}${amount}`;

// Génération du hash
const hash = crypto
  .createHmac("sha512", secretKey)
  .update(stringToHash)
  .digest("hex");

console.log("Generated hash:", hash);
