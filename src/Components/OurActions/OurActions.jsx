import React from "react";

import sensiblisation from "../../Assets/sensiblisation.jpeg";
import education from "../../Assets/education.jpeg";
import support from "../../Assets/support.jpeg";

const OurActions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Nos Actions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <img
              src={sensiblisation}
              alt="Sensibilisation"
              className="w-full h-60 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Campagnes de Sensibilisation
            </h2>
            <p className="text-lg text-gray-700">
              Nous organisons des campagnes de sensibilisation pour éduquer le
              public sur les dangers de l'insécurité routière et promouvoir des
              comportements responsables sur la route. Ces campagnes sont menées
              dans les écoles, les entreprises et les communautés locales.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <img
              src={education}
              alt="Éducation"
              className="w-full h-60 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Programmes Éducatifs
            </h2>
            <p className="text-lg text-gray-700">
              Nous proposons des programmes éducatifs complets dans les écoles
              et les communautés pour enseigner les règles de sécurité routière,
              les premiers secours et l'importance de la conduite responsable.
              Ces programmes sont adaptés à différents groupes d'âge et de
              niveaux d'éducation.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <img
              src={support}
              alt="Support aux Victimes"
              className="w-full h-60 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Support aux Victimes
            </h2>
            <p className="text-lg text-gray-700">
              Nous offrons un soutien complet aux victimes d'accidents de la
              route et à leurs familles. Cela comprend une assistance juridique,
              médicale et psychologique, ainsi que des programmes de
              réadaptation et de réintégration sociale pour les personnes
              handicapées.
            </p>
          </div>
          {/* Ajoutez ici d'autres actions */}
        </div>
      </div>
    </div>
  );
};

export default OurActions;
