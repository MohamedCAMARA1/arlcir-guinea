import React from "react";
import { useLocation } from "react-router-dom";

const CancelPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className="max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-yellow-700">
          Paiement Annulé
        </h2>
        <p className="text-center">
          ID de transaction : {params.get("transaction_id")}
        </p>
        <p className="text-center">
          Raison : Paiement annulé par l'utilisateur
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
