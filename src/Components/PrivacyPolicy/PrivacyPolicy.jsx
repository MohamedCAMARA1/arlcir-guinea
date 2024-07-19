import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Politique de Confidentialité et d'Anonymat
      </h1>
      <p className="mb-4">
        Nous prenons très au sérieux la confidentialité et l'anonymat de nos
        donateurs. Cette politique décrit comment nous recueillons, utilisons et
        protégeons vos informations personnelles.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">
        Collecte d'informations
      </h2>
      <p className="mb-4">
        Lorsque vous faites un don, nous recueillons les informations suivantes
        :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Nom</li>
        <li>Prénom</li>
        <li>Email</li>
        <li>Numéro de téléphone</li>
        <li>Montant du don</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">
        Utilisation des informations
      </h2>
      <p className="mb-4">
        Les informations collectées sont utilisées uniquement dans le but de
        traiter votre don. Elles ne seront jamais partagées avec des tiers sans
        votre consentement préalable.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">
        Dons anonymes
      </h2>
      <p className="mb-4">
        Si vous choisissez de faire un don anonyme, nous remplirons
        automatiquement les champs suivants avec des informations génériques :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Nom : Lambé</li>
        <li>Prénom : Khili</li>
        <li>Email : lambe.khili@gmail.com</li>
        <li>Numéro de téléphone : 613000000</li>
      </ul>
      <p className="mb-4">
        Ces informations anonymes nous permettent de traiter votre don tout en
        protégeant votre identité.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">
        Protection des informations
      </h2>
      <p className="mb-4">
        Nous mettons en œuvre une variété de mesures de sécurité pour maintenir
        la sécurité de vos informations personnelles. Vos informations sont
        protégées par des réseaux sécurisés et ne sont accessibles qu'à un
        nombre limité de personnes ayant des droits d'accès spéciaux à ces
        systèmes.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">Contact</h2>
      <p>
        Si vous avez des questions concernant cette politique de confidentialité
        et d'anonymat, vous pouvez nous contacter à l'adresse suivante :{" "}
        <a
          href="mailto:ong.preventionroutiereguinee@gmail.com"
          className="text-blue-600"
        >
          ong.preventionroutiereguinee@gmail.com
        </a>
        ou encore
        <a href="mailto:contact@arlcir.com" className="text-blue-600">
          contact@arlcir.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
