import React from "react";
import { Link } from "react-router-dom";

import arrow_to_join from "../../Assets/arrow_to_join.jpg";
import benevolat from "../../Assets/benevolat.jpg";
import donate from "../../Assets/donate.jpg";

const JoinUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Nous Rejoindre
        </h1>
        <p className="mb-4 text-gray-700">
          Rejoignez-nous dans notre mission pour lutter contre l'insécurité
          routière en Guinée. Nous accueillons toutes les personnes passionnées
          par la sécurité routière et prêtes à s'engager dans des actions
          concrètes.
        </p>
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm mb-4 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Devenir Membre
            </h2>
            <p className="mt-2 text-gray-700">
              En tant que membre, vous pouvez participer activement à nos
              campagnes de sensibilisation, nos programmes éducatifs et nos
              initiatives de soutien.
            </p>
            <Link to="/contact">
              <button className="mt-4 w-full px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-900">
                Nous Contacter
              </button>
            </Link>
          </div>
          <img
            src={benevolat}
            alt="Devenir Membre"
            className="md:w-1/2 mt-4 md:mt-0 rounded-lg"
          />
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm mb-4 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Faire du Bénévolat
            </h2>
            <p className="mt-2 text-gray-700">
              Nous avons toujours besoin de bénévoles pour aider à organiser des
              événements, distribuer du matériel éducatif et soutenir nos
              programmes sur le terrain.
            </p>
            <Link to="/contact">
              <button className="mt-4 w-full px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-900">
                Nous Contacter
              </button>
            </Link>
          </div>
          <img
            src={arrow_to_join}
            alt="Faire du Bénévolat"
            className="md:w-1/2 mt-4 md:mt-0 rounded-lg"
          />
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Faire un Don
            </h2>
            <p className="mt-2 text-gray-700">
              Votre soutien financier nous permet de continuer nos activités et
              d'atteindre plus de personnes avec nos messages de sécurité
              routière.
            </p>
            <Link to="/faire-un-don">
              <button className="mt-4 w-full px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-900">
                Faire un Don
              </button>
            </Link>
          </div>
          <img
            src={donate}
            alt="Faire un Don"
            className="md:w-1/2 mt-4 md:mt-0 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
