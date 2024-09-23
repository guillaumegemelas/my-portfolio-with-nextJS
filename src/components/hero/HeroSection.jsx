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

import { FaSortAlphaDown } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export const HeroSection = () => {
  // ---------------------------- ----------------------------
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const openLegalModal = () => {
    setIsLegalModalOpen(true);
  };

  const closeLegalModal = () => {
    setIsLegalModalOpen(false);
  };
  // ---------------------------- ----------------------------
  return (
    <>
      <div className="relative m-auto mt-12 mb-12 flex max-w-4xl flex-col items-center md:flex-row">
        <img
          width={300}
          height={300}
          // src="/images/avatar.jpg"
          src="/images/photo_profil.jpg"
          alt="photo de guillaume gemelas, développeur web freelance"
          className="top-[-16px] right-[-42px] rounded-full shadow-lg md:absolute"
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
          {/* <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <b>React developper.</b>   I’m a web JavaScript developper,
            specialized on React. I enhance my skills through daily-
            self-learning with online courses, tutorials, and personal projects,
            and I am ready to put my technical skills  to good use
          </p> */}
          <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <b>Concepteur Développeur d'Applications en Freelance.</b>
            <br />
            Je suis développeur web et mobile Freelance JavaScript spécialisé en
            React.
            <br />
            <br />
            <span className="flex items-center">
              {/* J'améliore mes compétences à travers de l'auto-formation, des
            tutoriels ainsi que des projets personnels---  */}
              <span className="text-4xl font-extrabold">
                <FaTools />
              </span>
              <span className="ml-7">
                Je mets à profit mes compétences techniques et mon expertise
                pour vous proposer un site ou une application web personnalisés,
                que ce soit avec des plateformes comme WordPress ou en
                développant entièrement du code sur mesure.
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

          {/* modifs faite le 16/01------------------------------------------ */}

          <p className="mt-48 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <span className="mb-3 flex items-center">
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
            <span className="flex items-center">
              {" "}
              {/* Use a flex container --*/}
              <span className="text-4xl font-extrabold ">
                <HiOutlineDesktopComputer />
              </span>{" "}
              {/* <span className="ml-7">
                <b>I develop your websites</b> on both the client-side
                (Front-end) and server-side (Back-end). Below, you can find my
                projects, most of them have been created using ReactJS or
                NextJS.
              </span> */}
              <span className="ml-7">
                <b>Je développe vos sites web</b> aussi bien sur la partie
                client (Front-end) que sur la partie serveur (Back-end). <br />
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
            </span>
            <br />
            <br />
            <span className="flex items-center">
              {" "}
              {/* Use a flex container --*/}
              <span className="text-4xl font-extrabold ">
                <FaGoogle />
              </span>{" "}
              {/* <span className="ml-7">
                <b>I develop your websites</b> on both the client-side
                (Front-end) and server-side (Back-end). Below, you can find my
                projects, most of them have been created using ReactJS or
                NextJS.
              </span> */}
              <span className="ml-7">
                <b>
                  Je réalise une étude complète de votre site afin d'améliorer
                  son référencement naturel (SEO).
                </b>{" "}
                Je mets en place une statégie globale pour optimiser votre
                présence en ligne, augmenter votre visibilité et ainsi générer
                du traffic sur votre site.
              </span>
            </span>
          </p>
          <br />
          <span className="flex items-center">
            <span className="text-4xl font-extrabold">
              {" "}
              <IoSchool />
            </span>
            {/* <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              Do not hesitate to contact me, I would be happy to review your
              project and respond as soon as possible
            </span> */}
            <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
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
          <span className="flex items-center">
            <span className="text-4xl font-extrabold">
              {" "}
              <RiContactsLine />
            </span>
            {/* <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              Do not hesitate to contact me, I would be happy to review your
              project and respond as soon as possible
            </span> */}
            <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
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
                  Création de sites web, refonte de sites web, amélioration du
                  référencement naturel, formations sur l'univers du web
                </p>
              </section>

              {/* Section 2 : Protection des données personnelles */}
              <section className="mt-24 mb-24">
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
    </>
  );
};
