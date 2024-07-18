import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../Assets/Logo_RLCIR.png";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();

  const handleNavItemClick = () => {
    setIsNavExpanded(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-l from-blue-800 to-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex">
          <img
            src={logo}
            alt="Logo"
            className={`h-10 transition-transform duration-300 ${
              isNavExpanded ? "scale-75" : "scale-100"
            }`}
          />
        </Link>
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? <IoCloseSharp /> : <RxHamburgerMenu />}
        </button>
        <div
          className={`md:flex items-center ${
            isNavExpanded ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {[
              { to: "/", text: "Accueil" },
              { to: "/a-propos", text: "À Propos" },
              { to: "/nos-actions", text: "Nos Actions" },
              { to: "/nous-rejoindre", text: "Nous Rejoindre" },
              { to: "/faire-un-don", text: "Faire Un Don" },
              { to: "/contact", text: "Contact" },
            ].map((item, index) => (
              <li
                key={index}
                className={`nav-item transition-colors duration-200 ${
                  isActive(item.to)
                    ? "underline underline-offset-4 font-bold text-light-blue-500"
                    : "hover:underline hover:underline-offset-4 hover:text-light-blue-500"
                }`}
                onClick={handleNavItemClick}
              >
                <Link to={item.to} className="block py-2 text-white">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
