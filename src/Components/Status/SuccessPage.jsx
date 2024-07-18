import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
  const location = useLocation();
  const [detailsTransaction, setDetailsTransaction] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const transactionID = params.get("transaction_id");

    const getTransactionDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/trans_status?transaction_id=${transactionID}`
        );
        setDetailsTransaction(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de la transaction :",
          error
        );
      }
    };

    if (transactionID) {
      getTransactionDetails();
    }
  }, [location.search]);

  if (!detailsTransaction) {
    return <p>Chargement des détails de la transaction...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-700">
          Paiement Réussi !
        </h2>
        <p className="text-center">
          ID de transaction : {detailsTransaction.transaction_id}
        </p>
        <p className="text-center">Montant : {detailsTransaction.amount}</p>
        <p className="text-center">
          Description : {detailsTransaction.description}
        </p>
        {/* Ajouter d'autres détails de transaction au besoin */}
      </div>
    </div>
  );
};

export default SuccessPage;
