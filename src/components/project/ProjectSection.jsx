// import useEffect, useState, useReducer,"react";
import React from "react";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { GITHUB_USERNAME } from "../../lib/config";
import { Loader } from "../atom/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";

import { FaAtlassian } from "react-icons/fa";

import { useState } from "react";

//-----------------
import { BsEyeglasses } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiSkirt } from "react-icons/gi";
import { MdPermDeviceInformation } from "react-icons/md";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { SiGooglepodcasts } from "react-icons/si";
import { MdSportsHandball } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { FaTree } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { GiSawedOffShotgun } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
//--------------

export const ProjectSection = () => {
  //------------
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  //----------
  //ajouter un tableau d'icone--
  const iconArray = [
    <RiMovie2Line key={1} />,
    <IoGameControllerOutline key={2} />,
    <GiSkirt key={3} />,
    <MdPermDeviceInformation key={4} />,
    <BsFileEarmarkPerson key={5} />,
  ];
  const imgArray = [
    "/images/tmdb.png",
    "/images/gamepad.png",
    "/images/vinted.png",
    "/images/news.png",
    "/images/portfolio.png",
  ];

  const {
    status,
    data: projects,
    error,
  } = useFetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME));

  if (status === "pending" || status === "idle") {
    return <Loader />;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <SectionWrapper
      title={
        <div
          style={{ display: "flex", alignItems: "center" }}
          id="Achievements"
        >
          <FaAtlassian
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
          />{" "}
          Ils m'ont fait confiance.
        </div>
      }
    >
      <div className="flex flex-wrap justify-center gap-8">
        {/* ----projet formprotech---------*/}
        <Project
          key="15"
          icon={<MdFactory />}
          image="/images/formprotech3.png"
          name="Formprotech"
          homepageUrl="https://formprotech.fr"
          description="Conception d’un site vitrine pour Formprotech, organisme spécialisé dans la formation professionnelle, alliant expertise technique, développement technico-commercial et accompagnement humain pour renforcer les compétences des entreprises et de leurs collaborateurs."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://formprotech.fr"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet clinicarmes----------*/}
        <Project
          key="14"
          icon={<GiSawedOffShotgun />}
          image="/images/clinic.webp"
          name="Clinic Armes"
          homepageUrl="https://www.clinic-armes.fr"
          description="Conception d’un site vitrine pour Clinic Armes, armurerie à Villars-les-Dombes, mettant en avant leur passion pour les équipements de qualité, leur expertise et leurs conseils, au service des particuliés et les professionnels"
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://clinic-armes.fr"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet mailland--------*/}
        <Project
          key="9"
          icon={<IoIosBed />}
          image="/images/mailland.png"
          name="Les Meubles Mailland"
          homepageUrl="https://meublesmailland.fr"
          description="Conception d’un site vitrine pour l’entreprise Les Meubles Mailland, moderne et fonctionnel, mettant en avant leur savoir-faire et leurs créations sur mesure permettant aux visiteurs de découvrir l’univers de l’entreprise."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://meublesmailland.fr"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet nathalie et cie--------------*/}
        <Project
          key="1"
          icon={<MdOutlinePets />}
          image="/images/nath.webp"
          name="Nathalie & cie"
          homepageUrl="https://nathalie-et-cie.fr"
          description="Site web e-commerce développé pour l’entreprise Nathalie & Cie, intégrant une boutique en ligne avec un système avancé de gestion des produits et des commandes, et une interface utilisateur à la fois intuitive et moderne."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://nathalie-et-cie.fr"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet essain----------------*/}
        <Project
          key="2"
          icon={<RiTeamFill />}
          image="/images/essain4.webp"
          name="ESS'Ain"
          homepageUrl="https://essain.com"
          description="Création d’un site web pour la Coopérative ESS’Ain, intégrant une fonctionnalité de connexion sécurisée pour les utilisateurs et un annuaire des membres, visant à améliorer la communication et la gestion des informations au sein de la coopérative."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://essain.com"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet sou des ecoles---------------*/}
        <Project
          key="12"
          icon={<TbMoodKid />}
          image="/images/sou.webp"
          name="Sou des écoles"
          homepageUrl="https://sou-des-ecoles-01370.fr"
          description="Création d’un site pour le Sou des Écoles de Saint-Étienne-du-Bois, conçu pour refléter l’engagement solidaire de l’association. Ce site convivial et informatif permet de présenter les actions, événements et missions du Sou, tout en encourageant la participation des parents et bénévoles au service des enfants de l’école publique."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://sou-des-ecoles-01370.fr/"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet comp&vous----------------*/}
        <Project
          key="11"
          icon={<MdOutlineAutoGraph />}
          image="/images/comp3.webp"
          name="Compétences & vous"
          homepageUrl="https://competencesetvous.fr"
          description="Sécurisation et optimisation des performances du site, optimisation du SEO pour améliorer sa visibilité sur les moteurs de recherche. Mise en place de stratégies d’optimisation on-page et off-page pour un référencement durable"
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://competencesetvous.fr/"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet kodama--------------*/}
        <Project
          key="10"
          icon={<FaTree />}
          image="/images/kodama.webp"
          name="Kodama"
          // homepageUrl="https://guillaume-gemelas-dev.com/#Projects"
          description="Développement d’une application web sur mesure intégrant une gestion avancée de marqueurs sur une carte interactive (Leaflet), avec suivi des projets clients, interface utilisateur optimisée en React, et gestion des données via une base MongoDB"
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://guillaume-gemelas-dev.com/#Projects"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet glc-com------------------*/}
        <Project
          key="3"
          icon={<MdSportsHandball />}
          image="/images/epgv2.png"
          name="Epgv01"
          homepageUrl="https://epgv01.fr"
          description="Conception d’un site vitrine pour le CODEP EPGV01, visant à améliorer la visibilité du comité et à fournir une plateforme facile à mettre à jour pour partager les informations sur les activités physiques et les événements locaux."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://epgv01.fr"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet glc-com-----------------------*/}
        <Project
          key="4"
          icon={<SiGooglepodcasts />}
          image="/images/glc3.webp"
          name="Glc Communication"
          homepageUrl="https://glc-com.com"
          description="Site web vitrine développé pour l’entreprise Glc Communication avec WordPress, intégrant un blog, des podcasts, et divers contenus multimédias. Ce site est conçu pour renforcer la présence en ligne de l’entreprise et offrir une plateforme interactive pour partager des actualités et des informations."
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://glc-com.com"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet essilor-------------*/}
        <Project
          key="5"
          icon={<BsEyeglasses />}
          image="/images/essilo.webp"
          name="Essilor"
          homepageUrl="https://www.meyecustom.com"
          description="Développement d’une webapp interactive pour Essilor, permettant aux utilisateurs de personnaliser des lunettes de vue et solaires en magasin. Cette interface de personnalisation offre une expérience utilisateur fluide, avec des options variées pour ajuster le style, la couleur, et les fonctionnalités des lunettes."
          handleClick={handleClick}
          showAlertOnClick={true} // Activer l'ale
          url="https://guillaume-gemelas-dev.com/#Projects"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* on va mapper sur les repositories de Github */}
        {projects?.map((repository, index) => {
          const icon = iconArray[index];
          const image = imgArray[index];
          return (
            <React.Fragment key={repository.name}>
              {" "}
              {/* Ajout d'une clé unique */}
              {index < 1 && (
                <Project
                  key={repository.name}
                  {...repository}
                  icon={icon}
                  image={image}
                  handleClick={handleClick}
                  showAlertOnClick={false} // Désactiver l'alerte pour les autres projet
                />
              )}
            </React.Fragment>
          );
        })}
        {/* GitHub Repository - Exercise (replace this) */}
        {/* <Project {...projects[0]} /> */}
      </div>
      {showAlert && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center">
          <div className="absolute left-0 right-0 top-0 bg-red-500 p-2 text-center text-white opacity-100 transition-opacity duration-500">
            Le code source ne peut pas être visualisé.
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};
