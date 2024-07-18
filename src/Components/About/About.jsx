import React from "react";
import arlcir_cover from "../../Assets/cover_arlcir.jpg";

const About = () => {
  return (
    <>
      {/* cover image */}
      <div className="relative h-[400px] w-full">
        <img
          src={arlcir_cover}
          alt="EAI study section illustration's cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 font-sans bg-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            À propos de l'Association pour le Renforcement de la Lutte Contre
            l’Insécurité Routière (RLCIR)
          </h1>

          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900">
              <strong>
                Association pour le Renforcement de la Lutte Contre l’Insécurité
                Routière
              </strong>{" "}
              (RLCIR) est une organisation non gouvernementale apolitique à but
              non lucratif, créée par des jeunes guinéens conscients des dangers
              de l’insécurité routière en République de Guinée.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Préambule
          </h2>
          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900">
              Consciente du danger du phénomène de l’insécurité routière en
              République de Guinée, RLCIR a été fondée pour pallier le manque de
              solutions adéquates malgré les efforts fournis par le
              gouvernement, efforts qui ont coûté la vie à de nombreuses
              victimes innocentes.
            </p>
            <p className="text-lg text-blue-900">
              Convaincue que la sensibilisation et l'éducation des jeunes,
              futurs leaders et acteurs du pays, sont essentielles,
              l'association œuvre pour augmenter la prise de conscience des
              dangers routiers et réduire ainsi les accidents par des mesures de
              prévention.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Objectifs de RLCIR
          </h2>
          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <ul className="list-disc list-inside text-lg text-blue-900 ml-6">
              <li>Lutter contre l’insécurité routière.</li>
              <li>
                Sensibiliser, éduquer et augmenter le niveau de conscientisation
                des usagers de la route.
              </li>
              <li>
                Mener des activités compatibles avec les réalités
                socioculturelles pour lutter contre l’insécurité routière.
              </li>
              <li>
                Étudier, formuler et soutenir les programmes en faveur des
                usagers de la route, notamment dans les zones les plus reculées.
              </li>
              <li>
                Promouvoir et vulgariser les droits des usagers de la route.
              </li>
              <li>
                Travailler en collaboration avec les organisations existantes,
                les institutions internationales et les programmes nationaux de
                lutte contre l’insécurité routière.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Structures et Fonctionnement
          </h2>
          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900">
              RLCIR est structurée en plusieurs niveaux :
            </p>
            <ul className="list-disc list-inside text-lg text-blue-900 ml-6">
              <li>
                <strong>Assemblée Générale</strong>: Instance suprême regroupant
                tous les membres.
              </li>
              <li>
                <strong>Bureau Exécutif National</strong>: Chargé de mettre en
                œuvre les décisions de l'Assemblée Générale.
              </li>
              <li>
                <strong>Antennes Régionales</strong>: Présentes dans chaque
                chef-lieu de région administrative de la Guinée.
              </li>
              <li>
                <strong>
                  Antennes Préfectorales, Communales et Sous-Préfectorales
                </strong>
                : Points d’appui et relais des antennes régionales.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Adhésion et Membres
          </h2>
          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900">
              L’adhésion à RLCIR est ouverte à toute personne respectant les
              conditions définies dans les statuts. Les membres sont répartis en
              différentes catégories : membres de plein droit, membres affiliés,
              membres associés et membres honoraires.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Finances
          </h2>
          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900">
              Les ressources financières de RLCIR proviennent des cotisations
              des membres, des contributions volontaires, des dons, legs et
              subventions. La gestion financière est rigoureusement encadrée,
              avec des comptes bancaires dédiés et des transactions effectuées
              par chèques, signés conjointement par le trésorier et le président
              ou le secrétaire général.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Durée et Dissolution
          </h2>
          <div className="bg-white shadow-lg p-6 mb-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900">
              RLCIR est constituée pour une durée illimitée. En cas de
              dissolution, les avoirs de l’association seront distribués entre
              les associations ou ONG ayant des objectifs similaires.
            </p>

            <p className="text-lg text-blue-900">
              Les présents statuts et règlement intérieur ont été adoptés à
              l’unanimité par l’Assemblée générale constitutive du 1er octobre
              2023 à Conakry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
