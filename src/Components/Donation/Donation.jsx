import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Import du composant ClipLoader
import donation_hands from "../../Assets/donation_hands.jpeg";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Diviser le montant par 100
    const adjustedAmount = amount / 100;

    try {
      const response = await axios.post("/api/makepayment", {
        email,
        firstname,
        lastname,
        phone,
        amount: adjustedAmount,
      });

      if (response.data && response.data.gatewayUrl) {
        window.location.href = response.data.gatewayUrl;
      } else {
        setError("Failed to initialize payment.");
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
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
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Prénom"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Nom"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Numéro de téléphone"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Montant"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-800 rounded hover:bg-blue-900"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader size={20} color={"#ffffff"} loading={loading} /> // Animation ClipLoader pendant le chargement
                ) : (
                  "Faire un Don"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
