// import { FULL_NAME } from "../../lib/config";
// ---------------------------- ----------------------------
import { useState } from "react";
import { Button } from "../atom/Button";
// ---------------------------- ----------------------------

import { AiOutlineQuestionCircle } from "react-icons/ai";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { TbDrone } from "react-icons/tb";
import { FaSortAlphaDown } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";
// import { IoVideocamOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

//animations lottie---------
import LottieComponent from "../Lottie/LottieComponent";
import animationData from "../../../public/animation/animation.json";
import animationData1 from "../../../public/animation/animation1.json";
import animationData2 from "../../../public/animation/animation2.json"; // Remplace le chemin si nécessaire
import animationData4 from "../../../public/animation/animation4.json";
import animationData5 from "../../../public/animation/animation5.json";
//--------------------------

export const HeroSection = () => {
  // ---------------------------- ----------------------------
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);

  const openLegalModal = () => {
    setIsLegalModalOpen(true);
  };

  const closeLegalModal = () => {
    setIsLegalModalOpen(false);
  };

  const openDroneModal = () => {
    setIsDroneModalOpen(true);
  };

  const closeDroneModal = () => {
    setIsDroneModalOpen(false);
  };
  // ---------------------------- ----------------------------
  return (
    <>
      <div className="relative m-auto mb-12 mt-12 flex max-w-4xl flex-col items-center md:flex-row">
        <img
          width={300}
          height={300}
          // src="/images/avatar.jpg"
          src="/images/photo_profil.jpg"
          alt="photo de guillaume gemelas, développeur web freelance"
          className="right-[-42px] top-[-16px] rounded-full shadow-lg md:absolute"
          //md:absolute l'image passe en dessous du texte
        />
        {/* Hero - Exercise*/}
        <div className="flex flex-col gap-4 md:relative md:mr-32">
          {/* Hero - Exercise*/}
          <h1 className="text-6xl dark:drop-shadow-[0_0px_20px_rgba(0,0,0,1)] md:text-6xl">
            {/* I'm{" "} */}
            Je suis{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent">
              {/* {FULL_NAME} */}
              Guillaume Gemelas
            </span>
          </h1>
          <br />
          <br />

          {/* <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <b>React developper.</b>   I’m a web JavaScript developper,
            specialized on React. I enhance my skills through daily-
            self-learning with online courses, tutorials, and personal projects,
            and I am ready to put my technical skills  to good use
          </p> */}
          <h2>
            <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              <b>
                Concepteur Développeur d'Applications Freelance, basé dans
                l'Ain.
              </b>
              <br />
              <br />
              <br />
              <span className="flex items-center">
                {/* J'améliore mes compétences à travers de l'auto-formation, des
            tutoriels ainsi que des projets personnels-- */}
                <span className="text-4xl font-extrabold">
                  <MdOutlineSelfImprovement />
                </span>
                <span className="ml-7">
                  Je suis développeur web et mobile Freelance, spécialisé en
                  JavaScript et React. J'accompagne aussi bien les particuliers
                  que les entreprises dans la création de solutions numériques
                  performantes.
                </span>{" "}
              </span>
              <br />
              <span className="flex items-center">
                {/* J'améliore mes compétences à travers de l'auto-formation, des
            tutoriels ainsi que des projets personnels  */}
                <span className="text-4xl font-extrabold">
                  <FaTools />
                </span>
                <span className="ml-7">
                  Je mets à profit mes compétences techniques et mon expertise
                  pour vous proposer un site ou une application web
                  personnalisés, que ce soit avec des plateformes comme
                  WordPress ou en développant entièrement du code sur mesure.
                </span>{" "}
              </span>
              <br />
              <span className="flex items-center">
                {/* J'améliore mes compétences à travers de l'auto-formation, des
            tutoriels ainsi que des projets personnels  */}
                <span className="text-4xl font-extrabold">
                  <FaSortAlphaDown />
                </span>
                <span className="ml-7">
                  Je vous accompagne tout au long de votre projet, de la phase
                  d'étude initiale jusqu'à sa mise en ligne.
                </span>
              </span>
              <br />
              {/* Je mets mes compétences au service de la création de sites et d’applications web sur mesure. Que ce soit via WordPress ou par un développement personnalisé, je m’adapte à vos attentes */}
            </p>
          </h2>
          <br />

          {/* modifs faite le 16/01------------------------------------------ */}
          <div className="mt-24 flex w-full flex-col justify-center md:flex-row">
            <div className="flex w-full justify-center sm:mb-12 md:mb-0 md:mr-6 md:w-full lg:mr-16">
              <img
                src="/images/logo6.png"
                alt="logo aindev"
                className="w-64 rounded shadow-lg md:w-full "
              />
            </div>

            <p className="mt-12  max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)] sm:mt-0">
              Ce qui m'anime, c'est avant tout la "vision locale". La notion de
              proximité est, à mon sens, essentielle pour comprendre toutes les
              facettes d'un projet. <br />
              C'est pourquoi, fin 2023, j'ai choisi de créer ma structure :
              <span>
                {" "}
                <button
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent"
                  onClick={openLegalModal}
                >
                  aindev.
                </button>
              </span>
              <br />
              {/* Son nom reflète parfaitement ma façon de travailler. */}
            </p>
          </div>
          {/* modifs faite pour le drone------------------------------------------ 
          {/* modifs faite le 16/01------------------------------------------ */}

          {/* <p className="mt-48 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]"> */}
          <span className="mb-3 mt-48 flex items-center ">
            <span className="mr-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold">
              <AiOutlineQuestionCircle
                style={{
                  color: "#677AF1",
                }}
              />
            </span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold text-transparent">
              Ce que je peux faire pour vous
            </span>{" "}
            {/* <span className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                What can I do for you
              </span>{" "} */}
          </span>
          <br />
          <br />
          <span className="flex w-full flex-col items-center justify-center">
            {/* Animation Lottie centrée */}
            <div className="mt-12 flex items-center justify-center">
              <LottieComponent
                animationData={animationData5}
                width={200}
                height={200}
                loop={true}
              />
            </div>
            {/* Use a flex container --*/}
            {/* <span className="text-4xl font-extrabold ">
                <HiOutlineDesktopComputer />
              </span> */}{" "}
            {/* <span className="ml-7">
                <b>I develop your websites</b> on both the client-side
                (Front-end) and server-side (Back-end). Below, you can find my
                projects, most of them have been created using ReactJS or
                NextJS.
              </span> */}
            <span className=" ml-16 mt-3 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              <b>Je développe vos sites web</b> aussi bien sur la partie client
              (Front-end) que sur la partie serveur (Back-end). <br />
              Que vous souhaitiez partir d'une feuille blanche ou améliorer un
              site existant, je prends le temps d'étudier votre projet pour
              répondre au mieux à vos besoins.
              <br />
              Vous pouvez consulter ci-dessous{" "}
              <b>
                <a href="#Achievements" className="text-current">
                  mes réalisations
                </a>{" "}
              </b>
              , réalisées avec ReactJS, NextJS, VanillaJS ou encore Wordpress.
            </span>
            <br />
            <span className=" ml-16 mt-3 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              <b>Je m'occupe également de la maintenance de site web.</b> Mon
              objectif est de garantir le bon fonctionnement de votre site tout
              en étant <b>transparent sur les coûts mensuels</b>. Je propose une
              maintenance <b>adaptée à vos besoins</b>, avec un juste prix, pour
              vous accompagner en toute confiance.
              <br />
            </span>
          </span>
          <br />
          <br />
          {/* </p> */}
          <br />
          <span className="flex w-full flex-col items-center justify-center">
            {/* Animation Lottie centrée */}
            <div className="mb-12 flex items-center justify-center">
              <LottieComponent
                animationData={animationData}
                width={200}
                height={200}
                loop={true}
              />
            </div>
            {/* <span className="ml-7">
                <b>I develop your websites</b> on both the client-side
                (Front-end) and server-side (Back-end). Below, you can find my
                projects, most of them have been created using ReactJS or
                NextJS.
              </span> */}
            <span className="mb-24 ml-16 mt-3 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              <b>
                Je réalise une étude complète de votre site afin d'améliorer son
                référencement naturel (SEO).
              </b>{" "}
              Je mets en place une statégie globale pour optimiser votre
              présence en ligne, augmenter votre visibilité et ainsi générer du
              traffic sur votre site.
            </span>
          </span>
          <span className="flex w-full flex-col items-center justify-center">
            {/* Animation Lottie centrée */}
            <div className="flex items-center justify-center">
              <LottieComponent
                animationData={animationData1}
                width={250}
                height={250}
                loop={true}
              />
            </div>
            {/* <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              Do not hesitate to contact me, I would be happy to review your
              project and respond as soon as possible
            </span> */}
            <span className=" ml-16 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              <b>Je propose des formations personnalisées</b> dispensées
              directement dans votre entreprise, sur des sujets définis
              ensemble, comme la création de landing pages, le référencement
              naturel ou encore la maîtrise des outils de communication. <br />
              De plus, je vous offre des séances de conseil pour optimiser votre
              présence en ligne, que ce soit sur les réseaux sociaux ou sur
              votre site internet.
            </span>
          </span>
          <br />

          <span className="flex w-full flex-col items-center justify-center">
            {/* Animation Lottie centrée */}
            <div className="flex items-center justify-center">
              <LottieComponent
                animationData={animationData2}
                width={250}
                height={250}
                loop={true}
              />
            </div>
            {/* <span className="flex items-center">
            <span className="text-4xl font-extrabold">
              {" "}
              <TbDrone />
            </span> */}
            {/* <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              Do not hesitate to contact me, I would be happy to review your
              project and respond as soon as possible
            </span> */}
            <span className="mb-24 ml-16 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              En complément de mes services en développement web,{" "}
              <b>je propose désormais des prises de vues aériennes par drone</b>
              . Que ce soit pour mettre en valeur vos locaux, vos événements ou
              votre environnement, je mets à disposition mon expertise pour
              capturer des images et vidéos de haute qualité. Cette nouvelle
              activité est spécialement pensée pour les entreprises souhaitant{" "}
              <b>
                dynamiser leur communication avec des contenus visuels
                percutants et immersifs
              </b>
              .
              <span>
                {" "}
                <button
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent"
                  onClick={openDroneModal}
                >
                  Vous voulez en savoir plus?
                </button>
              </span>
            </span>
          </span>
          <br />

          <br />
          <span className="flex w-full flex-col items-center justify-center">
            {/* Animation Lottie centrée */}
            <div className="flex items-center justify-center">
              <LottieComponent
                animationData={animationData4}
                width={230}
                height={230}
                loop={true}
              />
            </div>
            {/* <span className="flex items-center">
            <span className="text-4xl font-extrabold">
              {" "}
              <RiContactsLine />
            </span> */}
            {/* <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              Do not hesitate to contact me, I would be happy to review your
              project and respond as soon as possible
            </span> */}
            <span className="ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              N'hésitez pas à me{" "}
              <b>
                <a className="text-current" href="#Contact">
                  contacter
                </a>
              </b>
              , je serai ravi d'étudier votre projet et de vous apporter une
              réponse dans les plus brefs délais.
            </span>
          </span>
        </div>
      </div>
      {isLegalModalOpen && (
        <div className="modal-overlay">
          <div className="modal ">
            <div className="modal-content">
              {/* Contenu des mentions légales */}

              <div className="mb-16 flex items-center justify-center ">
                <h2 className="text-center text-3xl ">Aindev</h2>{" "}
                <span className="ml-4 text-3xl">
                  <MdDevicesOther />
                </span>
              </div>

              {/* Section 1 : Mentions légales */}
              <section className="mb-12">
                <div className="mb-6 flex items-center">
                  <span className="mr-4 text-2xl">
                    <FaInfoCircle />
                  </span>
                  <h2 className="text-xl underline">
                    Informations juridiques de l'entreprise:
                  </h2>
                </div>

                <p className="mb-4">
                  <span className="font-semibold">Activité :</span>{" "}
                  Programmation informatique
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Création :</span> 25/03/2024
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Dirigeant :</span> Guillaume
                  Gemelas
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Forme juridique :</span>{" "}
                  Entrepreneur individuel
                </p>
                <p className="mb-4">
                  <span className="font-semibold">SIREN :</span> 924911951
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Activité principale :</span>{" "}
                  Création de sites web, refonte de sites web, maintenance de
                  site, amélioration du référencement naturel, formations sur
                  l'univers du web
                </p>
              </section>

              {/* Section 2 : Protection des données personnelles */}
              <section className="mb-24 mt-24">
                <div className="justify-center gap-8 xl:flex">
                  <img
                    src="/images/carte2.png"
                    alt="carte visite aindev"
                    className="mx-auto mb-12 w-96 rounded shadow-lg xl:mb-0"
                  />
                  <img
                    src="/images/carte1.png"
                    alt="carte visite aindev"
                    className="mx-auto w-96 rounded shadow-lg"
                  />
                </div>

                {/* Le reste du contenu de la section 2 */}
              </section>
            </div>

            {/* Bouton pour fermer la modale */}
            <div className="flex justify-center">
              <Button className="w-64" onClick={closeLegalModal}>
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
      {isDroneModalOpen && (
        <div className="modal-overlay-test">
          <div className="modal-test max-h-screen overflow-y-auto ">
            <div className="modal-content mt-24">
              <div className="mb-16 flex items-center justify-center ">
                <h2 className="text-center text-3xl ">
                  Prises de vue par drone
                </h2>{" "}
                <span className="ml-12 text-3xl">
                  <TbDrone />
                </span>
              </div>

              <section className="mx-auto mb-12 w-2/3 justify-center text-center">
                <p className="mb-4">
                  Avec mon DJI Air 3, je capture des photos et vidéos aériennes
                  spectaculaires, et réalise des{" "}
                  <span className="mb-4 font-semibold">
                    montages professionnels
                  </span>
                  .
                </p>
                <p>
                  {" "}
                  Pour un projet immobilier, un événement ou une création
                  artistique, je vous garantis des{" "}
                  <span className="font-semibold">
                    contenus visuels d’exception!
                  </span>
                </p>
              </section>

              {/* Section de contenu visuel */}
              <section className="mb-24 mt-24">
                <div className="flex flex-col gap-16 xl:flex-row">
                  {/* Colonne gauche */}
                  <div className="flex flex-col items-center gap-8 xl:w-1/2">
                    {/* Image */}
                    <div className="flex h-[400px] w-full items-center justify-center  ">
                      <img
                        src="/images/revermont.webp"
                        alt="visuel drone sur montagnes"
                        className="h-full w-full rounded-3xl object-cover shadow-lg"
                      />
                    </div>

                    {/* Vidéo YouTube */}
                    <div
                      className="relative w-full"
                      style={{
                        height: "400px",
                      }} /* Fixe la hauteur en pixels ---*/
                    >
                      <iframe
                        // src="https://www.youtube.com/embed/Vcva5RqbjUA"
                        src="https://www.youtube.com/embed/RTPvkyMYa5w"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute left-0 top-0 h-full w-full rounded-3xl shadow-lg"
                      ></iframe>
                    </div>
                  </div>

                  {/* Colonne droite */}
                  <div className="flex h-[830px] w-full items-center justify-center   xl:w-1/2">
                    <img
                      src="/images/drone.jpg"
                      alt="visuel drone sur montagnes"
                      className="h-full w-full rounded-3xl object-cover shadow-lg"
                    />
                  </div>
                </div>
              </section>
            </div>
            <section className="mx-auto mb-12 w-2/3 justify-center text-center">
              <p className="mb-4">
                Si vous souhaitez ajouter une touche de dynamisme à votre site
                web ou simplement immortaliser un moment unique, je suis à votre
                service.
              </p>
              <p className="mb-4 font-bold">
                N’hésitez pas à me contacter, je me ferai un plaisir de
                transformer vos idées en images spectaculaires !
              </p>
            </section>
            <div className="mb-24 flex justify-center">
              <Button className="w-64" onClick={closeDroneModal}>
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
