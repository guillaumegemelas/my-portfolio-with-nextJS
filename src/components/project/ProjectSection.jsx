// import useEffect, useState, useReducer,"react";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { GITHUB_USERNAME } from "../../lib/config";
import { Loader } from "../atom/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";

import { FaAtlassian } from "react-icons/fa";

import { useState } from "react";

//-----------
import { BsEyeglasses } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiSkirt } from "react-icons/gi";
import { MdPermDeviceInformation } from "react-icons/md";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { SiGooglepodcasts } from "react-icons/si";
import { MdSportsHandball } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
//--------------

export const ProjectSection = () => {
  //--------------
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  //-----------
  //ajouter un tableau d'icone--
  const iconArray = [
    <RiMovie2Line key={1} />,
    <IoGameControllerOutline key={2} />,
    <GiSkirt key={3} />,
    <MdPermDeviceInformation key={4} />,
    <BsFileEarmarkPerson key={5} />,
  ];
  const imgArray = [
    "/images/tmdb.jpg",
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
          Réalisations
        </div>
      }
    >
      <div className="flex flex-wrap justify-center gap-8">
        {/* ----projet essain-------------*/}
        <Project
          key="1"
          icon={<RiTeamFill />}
          image="/images/essain3.png"
          name="ESS'Ain"
          homepageUrl="https://essain.com"
          description="Site Web réalisé pour la Coopérative d'Activités en d'Emploi ESS'Ain, avec interface de connexion et annuaire des membres "
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://essain.com"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet glc-com-----------------------*/}
        <Project
          key="2"
          icon={<MdSportsHandball />}
          image="/images/epgv1.png"
          name="Epgv01"
          homepageUrl="https://epgv01.fr"
          description="Site Web Vitrine réalisé avec WordPress pour le Comité Départemental d'Éducation Physique et de Gymnastique Volontaire de l'Ain - CODEP EPGV01 "
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://epgv01.fr"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet glc-com-----------------------*/}
        <Project
          key="3"
          icon={<SiGooglepodcasts />}
          image="/images/glc.png"
          name="Glc Communication"
          homepageUrl="https://glc-com.com"
          description="Site Web Vitrine réalisé avec WordPress (blog, podcasts..) pour l'entreprise Glc Communication"
          handleClick={handleClick}
          // showAlertOnClick={true} // Activer l'ale
          url="https://glc-com.com"
          //modif de l'uril (avant pas d'url, car sinon SEO pas ortpimisé, lien pas suivi)
        />
        {/* ----projet essilor------------------------*/}
        <Project
          key="4"
          icon={<BsEyeglasses />}
          image="/images/essilor4.png"
          name="Essilor Webapp"
          homepageUrl="https://www.meyecustom.com"
          description="Webapp de type interface de personnalisation de lunettes de vue et solaires pour Essilor"
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
            <Project
              key={repository.name}
              {...repository}
              icon={icon}
              image={image}
              handleClick={handleClick}
              showAlertOnClick={false} // Désactiver l'alerte pour les autres projet
            />
          );
        })}
        {/* GitHub Repository - Exercise (replace this) */}
        {/* <Project {...projects[0]} /> */}
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center">
          <div className="absolute top-0 left-0 right-0 bg-red-500 p-2 text-center text-white opacity-100 transition-opacity duration-500">
            Le code source ne peut pas être visualisé.
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};
