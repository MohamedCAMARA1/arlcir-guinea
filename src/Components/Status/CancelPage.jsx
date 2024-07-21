import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CancelPage = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const transactionID = params.get("transaction_id");

    const getTransactionDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/trans_status?transaction_id=${transactionID}`
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

    if (transactionID) {
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
        {details ? (
          <div className="space-y-4">
            <p className="text-center">
              <strong>Statut:</strong> {details.status}
            </p>
            <p className="text-center">
              <strong>Info:</strong> {details.info}
            </p>
            <p className="text-center">
              <strong>Email:</strong> {details.email || "Non disponible"}
            </p>
            <p className="text-center">
              <strong>Nom du marchand:</strong> {details.merchant_name}
            </p>
            <p className="text-center">
              <strong>ID unique:</strong> {details.unique_id}
            </p>
            <p className="text-center">
              <strong>Description:</strong> {details.description}
            </p>
            <p className="text-center">
              <strong>Nom du client:</strong>{" "}
              {details.customer_name || "Non disponible"}
            </p>
            <p className="text-center">
              <strong>Numéro de référence:</strong> {details.reference_no}
            </p>
            <p className="text-center">
              <strong>Code de la monnaie:</strong> {details.currency_code}
            </p>
            <p className="text-center">
              <strong>Montant:</strong> {details.amount}
            </p>
            <p className="text-center">
              <strong>ID de transaction:</strong> {details.transaction_id}
            </p>
            <p className="text-center">
              <strong>Code d'approbation:</strong> {details.approval_code}
            </p>
          </div>
        ) : (
          <p className="text-center">
            Détails de l'annulation non disponibles.
          </p>
        )}
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
