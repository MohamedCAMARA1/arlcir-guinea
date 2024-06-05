import React, { useState } from "react";
import axios from "axios";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/makepayment", {
        email,
        firstname,
        lastname,
        phone,
        amount,
      });

      setPaymentData(response.data);
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!paymentData ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            Donate
          </button>
        </form>
      ) : (
        <form
          action="https://gn.instantbillspay.com/instant/preview"
          id="myForm"
          method="post"
          name="myForm"
        >
          <input type="hidden" name="uid" value={paymentData.uid} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="firstname" value={firstname} />
          <input type="hidden" name="lastname" value={lastname} />
          <input type="hidden" name="phone" value={phone} />
          <input
            type="hidden"
            name="description"
            value={paymentData.description}
          />
          <input type="hidden" name="amount" value={amount} />
          <input type="hidden" name="uniqueID" value={paymentData.uniqueID} />
          <input type="hidden" name="hash" value={paymentData.hash} />
          <input type="hidden" name="returnUrl" value={paymentData.returnUrl} />
          <input
            type="radio"
            id="gw"
            name="gw"
            value="instantpay"
            style={{ display: "none" }}
            checked
          />
          <button type="submit" id="clickButton" className="btn btn-danger">
            Continue
          </button>
        </form>
      )}
    </div>
  );
};

export default DonationForm;
