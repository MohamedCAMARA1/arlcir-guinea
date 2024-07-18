import React, { useState } from "react";
import axios from "axios";

import donation_hands from "../../Assets/donation_hands.jpeg";

const Donation = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    amount: "",
    description: "Don pour ARLCIR",
    // merchantID: "GN1300014",
    // returnUrl: "https://arlcir-guinea-87a974c63eec.herokuapp.com/success-page",
    // failUrl: "https://arlcir-guinea-87a974c63eec.herokuapp.com/failure-page",
    // cancelUrl: "https://arlcir-guinea-87a974c63eec.herokuapp.com/cancel-page",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dataToSend = { ...paymentDetails };
    delete dataToSend.anonymous; // Retire la propriété 'anonymous' non requise par l'API

    try {
      const serverEndpoint = "/api/makepayment";
      const response = await axios.post(serverEndpoint, dataToSend);
      if (response.data.status === 200) {
        window.location.href = response.data.gateway_url;
      } else {
        alert("Failed to initiate payment: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
      alert("Error during payment initiation. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <blockquote className="text-xl italic font-semibold text-center text-gray-700">
            "La générosité est la fleur de la justice." - Nathaniel Hawthorne
          </blockquote>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-6">
          <div className="w-full md:w-1/2">
            <img
              src={donation_hands}
              alt="Donation Hands"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-center text-blue-800">
              Faire un don
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={paymentDetails.firstname}
                onChange={handleChange}
                placeholder="Prénom"
                className="w-full p-2 border border-gray-300 rounded"
                required={!paymentDetails.anonymous}
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={paymentDetails.lastname}
                onChange={handleChange}
                placeholder="Nom"
                className="w-full p-2 border border-gray-300 rounded"
                required={!paymentDetails.anonymous}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={paymentDetails.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required={!paymentDetails.anonymous}
              />
              <input
                type="text"
                id="phone"
                name="phone"
                value={paymentDetails.phone}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
                className="w-full p-2 border border-gray-300 rounded"
                required={!paymentDetails.anonymous}
              />
              <input
                type="number"
                id="amount"
                name="amount"
                value={paymentDetails.amount}
                onChange={handleChange}
                placeholder="Montant"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={paymentDetails.anonymous}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-800 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="anonymous" className="ml-2 text-gray-700">
                  Don Anonyme
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-800 rounded hover:bg-blue-900"
              >
                Faire un Don
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
