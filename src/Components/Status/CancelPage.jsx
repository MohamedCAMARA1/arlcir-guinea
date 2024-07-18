import React from "react";
import { useLocation } from "react-router-dom";

const CancelPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
        {/* Ajouter plus de détails si nécessaire */}
      </div>
    </div>
  );
};

export default CancelPage;
