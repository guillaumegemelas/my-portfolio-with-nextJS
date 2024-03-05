// ---------------------------- ----------------------------
import { useState } from "react";
import { Button } from "./atom/Button";
// ---------------------------- ----------------------------
import { SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Typography } from "./atom/Typography";
import { RiContactsLine } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { MdAnnouncement } from "react-icons/md";
import { Contact } from "./Contact";

export const Footer = () => {
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
    <footer className="mb-12 flex flex-col items-center gap-8 " id="Contact">
      <Typography variant="h2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiContactsLine
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
          />{" "}
          {/* Contact me ! */}
          Contactez-moi!
        </div>
      </Typography>
      <div className="flex w-full max-w-2xl flex-col items-center gap-2 ">
        <Typography variant="body2">
          {/* I’ll be happy to chat with you about a potential job or a freelance! */}
          Je serai ravi d'échanger avec vous.
        </Typography>

        {/* --------------test form contact------------------------------- */}
        <Contact />
        {/* --------------fin test form contact------------------------------- */}
        {/* <a
          className="text-base underline text-primary"
          href={`mailto:${EMAIL}`}
        > */}
        {/* guillaumegemelas@gmail.com */}
        {/* {EMAIL} */}
        {/* </a> */}
        <Typography variant="body2">
          {/* I’ll be happy to chat with you about a potential job or a freelance */}
          Si vous préférez échanger de vive voix, n'hésitez pas à me contacter!
        </Typography>
        <a className="flex items-center pb-8 text-base text-primary">
          <AiFillPhone className="mr-2" /> <p> 06.34.47.66.69</p>
        </a>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
        <div className="mt-16 mb-8 flex">
          <p className="flex items-center">
            {" "}
            <MdAnnouncement />
            <button className="ml-2" onClick={openLegalModal}>
              Mentions légales
            </button>
          </p>
          <p className="ml-4 mr-4">-</p>
          <p>Guillaume Gemelas - ain.dev</p>
        </div>
      </div>

      {/* Modale des mentions légales */}
      {isLegalModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              {/* Contenu des mentions légales */}
              <h2 className="mb-16 text-center text-3xl">Mentions légales</h2>

              {/* Section 1 : Mentions légales */}
              <section className="mb-12">
                <h3 className="mb-6 underline">1. Mentions légales :</h3>
                <p p className="mb-4">
                  Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                  2004 pour la confiance en l'économie numérique, il est précisé
                  aux utilisateurs du Site l'identité des différents
                  intervenants dans le cadre de sa réalisation et de son suivi.
                </p>
                <h4 className="font-semibold">Edition du site :</h4>
                <p className="mb-4">
                  Le site guillaume-gemelas-dev.com est édité par Guillaume
                  Gemelas, créateur de ain.dev
                </p>
                <h4 className="font-semibold">
                  Etude et Conception graphique et réalisation technique du site
                  :
                </h4>
                <p>Guillaume Gemelas – ain.dev</p>
                <p className="mb-4"> Micro-entreprise</p>
                <h4 className="font-semibold">Hébergement du site:</h4>
                <p>
                  Ce site est hebergé par HOSTINGER, dont le siège social est
                  situé HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street,
                  6023 Larnaca, Chypre, joignable par le moyen suivant
                  :https://www.hostinger.fr/contact.
                </p>
                {/* Le reste du contenu de la section 1 */}
              </section>

              {/* Section 2 : Protection des données personnelles */}
              <section className="mb-12">
                <h3 className="mb-6 underline">
                  2. Protection des données personnelles
                </h3>
                <p>
                  Les données personnelles, nécessaires, afin que nous puissions
                  répondre aux demandes que vous pourrez formuler sur notre site
                  (notamment via le formulaire de contact), mais également à des
                  fins statistiques pourront être collectées via le présent site
                  Internet.
                </p>
                {/* Le reste du contenu de la section 2 */}
              </section>

              {/* Section 3 : Obligation des utilisateurs */}
              <section className="mb-12">
                <h3 className="mb-6 underline">
                  3. Obligation des utilisateurs
                </h3>
                <p>
                  La structure générale, ainsi que les textes, images animées ou
                  non et tous les éléments composants ce site Web, sont la
                  propriété de … Toutes reproductions totales ou partielles de
                  son contenu, ainsi que toute extraction d'une partie
                  substantielle de la base de données qu'il contient est
                  interdite sans autorisation expresse et préalable de …
                </p>
                {/* Le reste du contenu de la section 3 */}
              </section>
            </div>

            {/* Bouton pour fermer la modale */}
            <div className="flex justify-center">
              <Button onClick={closeLegalModal}>Fermer</Button>
            </div>
          </div>
        </div>
      )}
      {/* <p>
      
        Created for educational purpose for the{' '}
        <a href="https://codelynx.dev/beginreact">BeginReact.dev formation</a>   !
      </p> */}
    </footer>
  );
};
