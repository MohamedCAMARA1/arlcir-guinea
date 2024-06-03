import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonationForm from "./DonationForm";
import ReturnURL from "./ReturnURL";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonationForm />} />
        <Route path="/returnUrl" element={<ReturnURL />} />
      </Routes>
    </Router>
  );
}

export default App;
