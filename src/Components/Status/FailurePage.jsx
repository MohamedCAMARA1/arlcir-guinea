import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FailurePage = () => {
  const location = useLocation();
  const [detailsErreur, setDetailsErreur] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refID = params.get("refNo");

    const getErreurDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/refstatus?ref=${refID}`
        );
        setDetailsErreur(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'erreur :",
          error
        );
      }
    };

    if (refID) {
      getErreurDetails();
    }
  }, [location.search]);

  if (!detailsErreur) {
    return <p>Chargement des détails de l'erreur...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-red-700">
          Paiement Échoué
        </h2>
        <p className="text-center">Erreur : {detailsErreur.info}</p>
        <p className="text-center">
          Numéro de référence : {detailsErreur.reference_no}
        </p>
        {/* Ajouter plus de détails sur l'erreur si nécessaire */}
      </div>
    </div>
  );
};

export default FailurePage;
