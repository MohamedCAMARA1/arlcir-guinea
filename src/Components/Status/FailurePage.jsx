import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FailurePage = () => {
  const location = useLocation();
  const [detailsErreur, setDetailsErreur] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const uniqueID = params.get("uniqueID");

    const getErreurDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/trans_status_muid?merchantID=${process.env.MERCHANT_ID}&uniqueID=${uniqueID}`
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

    if (uniqueID) {
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
        <p className="text-center">
          Erreur : {detailsErreur ? detailsErreur.info : "Non disponible"}
        </p>
        <p className="text-center">
          Numéro de référence :{" "}
          {detailsErreur ? detailsErreur.reference_no : "Non disponible"}
        </p>
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
