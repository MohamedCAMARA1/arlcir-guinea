// src/Components/Footer/Footer.jsx
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "../../Assets/Logo_RLCIR.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Partie Logo */}
        <img src={logo} alt="Logo" className="h-12 mr-4" />

        {/* Partie Contacts */}
        <div className="flex-grow lg:text-left lg:mx-4 lg:mt-0 mt-4">
          <div className="flex flex-col items-start lg:items-center">
            <p className="mb-2">
              <AiOutlinePhone className="inline-block mr-2" /> +224 657 50 47 84
              / +224 624 37 24 90
            </p>
            <p className="mb-2">
              <AiOutlineMail className="inline-block mr-2" /> contact@arlcir.com
            </p>
            <p className="mb-2">
              <AiOutlineMail className="inline-block mr-2" />{" "}
              ong.preventionroutiereguinee@gmail.com
            </p>
            <p className="text-sm">
              2éme avenue bis, Boulevard Diallo Telly, Sandervalia, Commune de
              Kaloum
            </p>
          </div>
        </div>

        {/* Partie Réseaux sociaux */}
        <div className="flex items-center lg:mx-4 lg:mt-0 mt-4">
          <div className="flex items-center lg:flex-col lg:items-start">
            <a
              href="https://www.facebook.com"
              className="text-3xl text-white hover:text-blue-400 mr-2 lg:mr-0"
            >
              <GrFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-3xl text-white hover:text-blue-400 mr-2 lg:mr-0"
            >
              <GrTwitter />
            </a>
            <a
              href="https://www.tiktok.com"
              className="text-3xl text-white hover:text-blue-400 mr-2 lg:mr-0"
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/224657504784"
              className="text-3xl text-white hover:text-blue-400 mr-2 lg:mr-0"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-3xl text-white hover:text-blue-400 lg:mr-0"
            >
              <GrInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Nouveau Footer Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <Link
            to="/politique-de-confidentialite"
            className="text-white hover:text-blue-400 mb-2 lg:mb-0"
          >
            Politique de confidentialité
          </Link>
          <span className="hidden lg:block mx-4">|</span>
          <span className="text-sm">
            ©Tout droit réservé - {currentYear} ARLCIR
          </span>
          <span className="hidden lg:block mx-4">|</span>
          <span className="text-sm">
            Site fait par{" "}
            <a
              href="https://www.aitech.com"
              className="text-blue-400 hover:text-blue-600"
            >
              Aï-tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
