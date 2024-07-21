import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";

const SuccessPage = () => {
  const location = useLocation();
  const [detailsTransaction, setDetailsTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const transactionID = params.get("transaction_id");

    const getTransactionDetails = async () => {
      try {
        const response = await axios.get(
          `https://gn.instantbillspay.com/api/bill/trans_status?transaction_id=${transactionID}`
        );
        setDetailsTransaction(response.data.Response);
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

  const generatePDF = () => {
    if (detailsTransaction) {
      const doc = new jsPDF();
      doc.text("Reçu de Paiement", 20, 20);
      doc.text(
        `ID de transaction : ${detailsTransaction.transaction_id}`,
        20,
        30
      );
      doc.text(`Montant : ${detailsTransaction.amount}`, 20, 40);
      doc.text(`Description : ${detailsTransaction.description}`, 20, 50);
      doc.text(`Nom du client : ${detailsTransaction.customer_name}`, 20, 60);
      doc.text(`Email : ${detailsTransaction.email}`, 20, 70);
      doc.text(`Nom du marchand : ${detailsTransaction.merchant_name}`, 20, 80);
      doc.text(`ID unique : ${detailsTransaction.unique_id}`, 20, 90);
      doc.text(
        `Numéro de référence : ${detailsTransaction.reference_no}`,
        20,
        100
      );
      doc.text(
        `Code de la monnaie : ${detailsTransaction.currency_code}`,
        20,
        110
      );
      doc.text(
        `Code d'approbation : ${detailsTransaction.approval_code}`,
        20,
        120
      );
      doc.save("recapitulatif_paiement.pdf");
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <p>Chargement des détails de la transaction...</p>
        <a
          href="/"
          className="mt-6 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Retour à l'accueil
        </a>
      </div>
    );
  }

  if (!detailsTransaction) {
    return (
      <div className="text-center">
        <p>Impossible de récupérer les détails de la transaction.</p>
        <a
          href="/"
          className="mt-6 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Retour à l'accueil
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-700">
          Paiement Réussi !
        </h2>
        <div className="space-y-4">
          <p className="text-center">
            <strong>Statut:</strong> {detailsTransaction.status}
          </p>
          <p className="text-center">
            <strong>Info:</strong> {detailsTransaction.info}
          </p>
          <p className="text-center">
            <strong>Email:</strong>{" "}
            {detailsTransaction.email || "Non disponible"}
          </p>
          <p className="text-center">
            <strong>Nom du marchand:</strong> {detailsTransaction.merchant_name}
          </p>
          <p className="text-center">
            <strong>ID unique:</strong> {detailsTransaction.unique_id}
          </p>
          <p className="text-center">
            <strong>Description:</strong> {detailsTransaction.description}
          </p>
          <p className="text-center">
            <strong>Nom du client:</strong>{" "}
            {detailsTransaction.customer_name || "Non disponible"}
          </p>
          <p className="text-center">
            <strong>Numéro de référence:</strong>{" "}
            {detailsTransaction.reference_no}
          </p>
          <p className="text-center">
            <strong>Code de la monnaie:</strong>{" "}
            {detailsTransaction.currency_code}
          </p>
          <p className="text-center">
            <strong>Montant:</strong> {detailsTransaction.amount}
          </p>
          <p className="text-center">
            <strong>ID de transaction:</strong>{" "}
            {detailsTransaction.transaction_id}
          </p>
          <p className="text-center">
            <strong>Code d'approbation:</strong>{" "}
            {detailsTransaction.approval_code}
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="/"
            className="mt-6 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Retour à l'accueil
          </a>
          <button
            onClick={generatePDF}
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Télécharger le reçu
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
