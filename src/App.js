// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Donation from "./Component/Donation/Donation";
import OurAction from "./Component/OurActions/OurActions";
import Footer from "./Component/Footer/Footer";
import NousRejoindre from "./Component/JoinUs/JoinUs";
import SuccessPage from "./Component/Status/SuccessPage";
import CancelPage from "./Component/Status/CancelPage";
import FailurePage from "./Component/Status/FailurePage";
import NotFound from "./Component/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nous-rejoindre" element={<NousRejoindre />} />
            <Route path="/faire-un-don" element={<Donation />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/nos-actions" element={<OurAction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success-page" element={<SuccessPage />} />
            <Route path="/cancel-page" element={<CancelPage />} />
            <Route path="/failure-page" element={<FailurePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
