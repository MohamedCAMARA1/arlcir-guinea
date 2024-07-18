import React from "react";
import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import d'image
import danger1 from "../../Assets/moto_danger.jpeg";
import danger2 from "../../Assets/danger2.jpg";
import danger3 from "../../Assets/danger3.jpg";

import carousselImage1 from "../../Assets/caroussel1.jpg";
import carousselImage2 from "../../Assets/caroussel2.jpg";
import carousselImage3 from "../../Assets/caroussel3.jpg";

const Home = () => {
  return (
    <>
      <div className="caroussel">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000, // Delay in ms before switching each slide
            disableOnInteraction: false, // Continue autoplay when the slider is interacted with (e.g., clicked)
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={carousselImage1} alt="caroussel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousselImage2} alt="caroussel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousselImage3} alt="caroussel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={danger1} alt="caroussel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={danger2} alt="caroussel" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="content w-4/5 lg:w-4/5 px-8 py-6 lg:px-20 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center uppercase">
            Introduction
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            L'insécurité routière en Guinée représente un défi majeur pour le
            développement socio-économique et la santé publique. En cinq ans, le
            pays a enregistré près de 21 890 accidents, causant 2 781 décès et
            laissant derrière eux 13 711 blessés, dont certains souffriront de
            handicaps à vie. La première édition de la Semaine Nationale de la
            Sécurité Routière, lancée à Conakry, souligne l'engagement du
            gouvernement guinéen à attaquer ce fléau. Toutefois, l'ampleur du
            problème exige une collaboration étendue entre le gouvernement, la
            société civile et les communautés locales.
          </p>

          <div className="bg-blue-200 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Contexte</h2>
            <p className="text-lg text-gray-700">
              La Guinée, à l'instar de nombreux pays en développement, fait face
              à des défis considérables en matière de sécurité routière. Les
              principales causes d'accidents incluent l'excès de vitesse, le
              non-respect du port du casque, l'utilisation du téléphone au
              volant, la conduite sous l'effet de l'alcool, et bien d'autres
              comportements à risque. De plus, la récente enquête
              d'Afrobarometer révèle une profonde insatisfaction des citoyens
              vis-à-vis des efforts gouvernementaux pour combattre l'insécurité
              en général, dont l'insécurité routière fait partie intégrante.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Objectif de notre ONG
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Notre proposition vise à créer une ONG dédiée spécifiquement à la
            lutte contre l'insécurité routière en Guinée. Cette organisation
            aura pour missions de :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Sensibiliser :
              </h3>
              <p className="text-lg text-gray-700">
                Organiser des campagnes de sensibilisation sur les dangers de la
                route et les comportements à adopter pour les éviter.
              </p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Éduquer :
              </h3>
              <p className="text-lg text-gray-700">
                Offrir des formations sur le code de la route, le premier
                secours, et la conduite responsable à tous les usagers de la
                route.
              </p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Collaborer :
              </h3>
              <p className="text-lg text-gray-700">
                Travailler de concert avec les autorités locales et nationales
                pour renforcer les lois et les règlements en matière de sécurité
                routière.
              </p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Soutenir :
              </h3>
              <p className="text-lg text-gray-700">
                Apporter un soutien aux victimes d'accidents de la route et à
                leurs familles.
              </p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Rechercher :
              </h3>
              <p className="text-lg text-gray-700">
                Conduire des études pour mieux comprendre les causes des
                accidents et développer des stratégies préventives efficaces.
              </p>
              <p className="text-lg text-gray-700">
                Phases Clés pour la Lutte contre l'Insécurité Routière
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-8">
            La création d'une ONG dédiée à la lutte contre l'insécurité routière
            en Guinée est une étape cruciale pour compléter les efforts du
            gouvernement et impliquer activement la société civile dans la
            prévention des accidents. Par une approche holistique alliant
            sensibilisation, éducation, collaboration, soutien et recherche,
            nous pouvons réduire significativement le nombre d'accidents de la
            route et leurs conséquences dévastatrices sur les individus et la
            société guinéenne dans son ensemble.
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default Home;
