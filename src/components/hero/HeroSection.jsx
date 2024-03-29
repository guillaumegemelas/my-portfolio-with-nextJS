// import { FULL_NAME } from "../../lib/config";

import { AiOutlineQuestionCircle } from "react-icons/ai";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";

export const HeroSection = () => {
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
            {/* J'améliore mes compétences à travers de l'auto-formation, des
            tutoriels ainsi que des projets personnels  */}
            Je vous accompagne tout au long de votre projet, de la phase d'étude
            initiale jusqu'à sa mise en ligne. <br />
            Je mets à profit mes compétences techniques et mon expertise pour
            vous proposer un site personnalisé, que ce soit en utilisant des
            plateformes de gestion de contenu comme WordPress ou en développant
            entièrement du code sur mesure.
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
              facettes d'un projet. C'est pourquoi, fin 2023, j'ai choisi de
              créer ma structure :
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent">
                {" "}
                aindev.
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
                client (Front-end) que sur la partie serveur (Back-end). Vous
                pouvez consulter ci dessous mes projets, pour la plupart
                réalisés avec ReactJS, NextJS ou encore en VanillaJS.
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
              <RiContactsLine />
            </span>
            {/* <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              Do not hesitate to contact me, I would be happy to review your
              project and respond as soon as possible
            </span> */}
            <span className="mt-3 ml-7 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
              N'hésitez pas à me{" "}
              <a className="text-current" href="#Contact">
                contacter
              </a>
              , je serai ravi d'étudier votre projet et de vous apporter une
              réponse dans les plus brefs délais.
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
