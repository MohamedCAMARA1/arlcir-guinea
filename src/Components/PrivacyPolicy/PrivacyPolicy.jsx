import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold text-blue-800 mb-4 text-center">
          Politique de Confidentialité et d'Anonymat
        </h1>
        <p className="text-sm mb-4 text-center">
          Nous prenons très au sérieux la confidentialité et l'anonymat de nos
          donateurs. Cette politique décrit comment nous recueillons, utilisons
          et protégeons vos informations personnelles.
        </p>

        <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">
          Collecte d'informations
        </h2>
        <p className="text-sm mb-4 text-center">
          Lorsque vous faites un don, nous recueillons les informations
          suivantes :
        </p>
        <ul className="list-disc list-inside mb-4 text-sm text-center">
          <li>Nom</li>
          <li>Prénom</li>
          <li>Email</li>
          <li>Numéro de téléphone</li>
          <li>Montant du don</li>
        </ul>

        <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">
          Utilisation des informations
        </h2>
        <p className="text-sm mb-4 text-center">
          Les informations collectées sont utilisées uniquement dans le but de
          traiter votre don. Elles ne seront jamais partagées avec des tiers
          sans votre consentement préalable.
        </p>

        <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">
          Dons anonymes
        </h2>
        <p className="text-sm mb-4 text-center">
          Si vous choisissez de faire un don anonyme, nous remplirons
          automatiquement les champs suivants avec des informations génériques :
        </p>
        <ul className="list-disc list-inside mb-4 text-sm text-center">
          <li>Nom : Lambé</li>
          <li>Prénom : Khili</li>
          <li>Email : lambe.khili@gmail.com</li>
          <li>Numéro de téléphone : 613000000</li>
        </ul>
        <p className="text-sm mb-4 text-center">
          Ces informations anonymes nous permettent de traiter votre don tout en
          protégeant votre identité.
        </p>

        <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">
          Protection des informations
        </h2>
        <p className="text-sm mb-4 text-center">
          Nous mettons en œuvre une variété de mesures de sécurité pour
          maintenir la sécurité de vos informations personnelles. Vos
          informations sont protégées par des réseaux sécurisés et ne sont
          accessibles qu'à un nombre limité de personnes ayant des droits
          d'accès spéciaux à ces systèmes.
        </p>

        <hr className="my-6 border-t border-gray-300" />

        <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">
          Contact
        </h2>
        <p className="text-sm text-center">
          Si vous avez des questions concernant cette politique de
          confidentialité et d'anonymat, vous pouvez nous contacter à l'adresse
          suivante :{" "}
          <a
            href="mailto:ong.preventionroutiereguinee@gmail.com"
            className="text-blue-600"
          >
            ong.preventionroutiereguinee@gmail.com
          </a>{" "}
          ou encore{" "}
          <a href="mailto:contact@arlcir.com" className="text-blue-600">
            contact@arlcir.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
