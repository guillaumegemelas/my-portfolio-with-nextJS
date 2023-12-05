// import { FULL_NAME } from "../../lib/config";

import { AiOutlineQuestionCircle } from "react-icons/ai";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";

export const HeroSection = () => {
  return (
    <>
      <div className="relative m-auto mt-12 mb-12 flex max-w-4xl flex-col items-center md:flex-row">
        <img
          width={300}
          height={300}
          // src="/images/avatar.jpg"
          src="/images/photo_profil.jpg"
          alt="avatar guillaume gemelas"
          className="top-[-16px] right-[-42px] rounded-full shadow-lg md:absolute"
          //md:absolute l'image passe en dessous du texte--
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
          {/* <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <b>React developper.</b> I’m a web JavaScript developper,
            specialized on React. I enhance my skills through daily
            self-learning with online courses, tutorials, and personal projects,
            and I am ready to put my technical skills to good use
          </p> */}
          <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <b>Développeur React.</b> Je suis un développeur web et mobile
            JavaScript spécialisé en React. J'améliore mes compétences à travers
            de l'auto-formation, des tutoriels ainsi que des projets personnels,
            et je suis prêt à mettre à profit mes compétences techniques et mon
            expertise à votre service.
          </p>

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
                réalisés avec ReactJS ou NextJS.
              </span>
            </span>
          </p>
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
              N'hésitez pas à me contacter, je serai ravi d'étudier votre projet
              et de vous apporter une réponse dans les plus brefs délais.
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
