import React from "react";
import { useLocation } from "react-router-dom";

function CancelPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <div>
      <h1>Paiement annulé</h1>
      <p>ID de transaction : {queryParams.get("transaction_id")}</p>
      <p>Référence : {queryParams.get("refNo")}</p>
      <p>Statut : {queryParams.get("status")}</p>
    </div>
  );
}

export default CancelPage;
