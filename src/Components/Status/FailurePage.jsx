import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FailurePage = () => {
  const location = useLocation();
  const [detailsErreur, setDetailsErreur] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const transactionID = params.get("transaction_id");

    const getErreurDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/trans_status?transaction_id=${transactionID}`
        );
        setDetailsErreur(response.data.Response);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'erreur :",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    if (transactionID) {
      getErreurDetails();
    }
  }, [location.search]);

  if (loading) {
    return (
      <div className="text-center">
        <p>Chargement des détails de l'erreur...</p>
        <a
          href="/"
          className="mt-6 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Retour à l'accueil
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-red-700">
          Paiement Échoué
        </h2>
        {detailsErreur ? (
          <div className="space-y-4">
            <p className="text-center">
              <strong>Statut:</strong> {detailsErreur.status}
            </p>
            <p className="text-center">
              <strong>Info:</strong> {detailsErreur.info}
            </p>
            <p className="text-center">
              <strong>Email:</strong> {detailsErreur.email || "Non disponible"}
            </p>
            <p className="text-center">
              <strong>Nom du marchand:</strong> {detailsErreur.merchant_name}
            </p>
            <p className="text-center">
              <strong>ID unique:</strong> {detailsErreur.unique_id}
            </p>
            <p className="text-center">
              <strong>Description:</strong> {detailsErreur.description}
            </p>
            <p className="text-center">
              <strong>Nom du client:</strong>{" "}
              {detailsErreur.customer_name || "Non disponible"}
            </p>
            <p className="text-center">
              <strong>Numéro de référence:</strong> {detailsErreur.reference_no}
            </p>
            <p className="text-center">
              <strong>Code de la monnaie:</strong> {detailsErreur.currency_code}
            </p>
            <p className="text-center">
              <strong>Montant:</strong> {detailsErreur.amount}
            </p>
            <p className="text-center">
              <strong>ID de transaction:</strong> {detailsErreur.transaction_id}
            </p>
            <p className="text-center">
              <strong>Code d'approbation:</strong> {detailsErreur.approval_code}
            </p>
          </div>
        ) : (
          <p className="text-center">Détails de l'erreur non disponibles.</p>
        )}
        <a
          href="/"
          className="mt-6 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default FailurePage;
