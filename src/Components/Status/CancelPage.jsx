import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CancelPage = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const uniqueID = params.get("uniqueID");

    const getTransactionDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/trans_status_muid?merchantID=${process.env.MERCHANT_ID}&uniqueID=${uniqueID}`
        );
        setDetails(response.data.Response);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de la transaction :",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    if (uniqueID) {
      getTransactionDetails();
    }
  }, [location.search]);

  if (loading) {
    return (
      <div className="text-center">
        <p>Chargement des détails de la transaction...</p>
        <a
          href="/"
          className="mt-6 inline-block bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
        >
          Retour à l'accueil
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className="max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-yellow-700">
          Paiement Annulé
        </h2>
        <p className="text-center">
          ID de transaction :{" "}
          {details ? details.transaction_id : "Non disponible"}
        </p>
        <p className="text-center">
          Raison :{" "}
          {details ? "Paiement annulé" : "Informations non disponibles"}
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default CancelPage;
