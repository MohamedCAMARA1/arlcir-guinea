// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Donation from "./Components/Donation/Donation";
import OurAction from "./Components/OurActions/OurActions";
import Footer from "./Components/Footer/Footer";
import NousRejoindre from "./Components/JoinUs/JoinUs";
import SuccessPage from "./Components/Status/SuccessPage";
import CancelPage from "./Components/Status/CancelPage";
import FailurePage from "./Components/Status/FailurePage";
import NotFound from "./Components/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
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
