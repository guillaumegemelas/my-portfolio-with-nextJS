// import useEffect, useState, useReducer,"react";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { GITHUB_USERNAME } from "../../lib/config";
import { Loader } from "../atom/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";

import { FaAtlassian } from "react-icons/fa";

//--pour refactor, on va utiliser le Hook useReducer avec un seul state:

// const fetchReducer = (state, action) => {
//   switch (action.type) {
//     case "pending": {
//       // data et error null
//       return { status: "pending", data: null, error: null };
//     }
//     case "resolved": {
//       // si resolved, error: null et on met data: action.data
//       return { status: "resolved", data: action.data, error: null };
//     }
//     case "rejected": {
//       // si error, on met data: null et error: error
//       return { status: "rejected", data: null, error: action.error };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// };

export const ProjectSection = () => {
  //ajouter un tableau d'icone
  const iconArray = ["🎬", "🎯", "🚀", "🧸", "👁️", "👨🏻‍🦲"];
  const imgArray = [
    "/images/tmdb.jpg",
    "/images/gamepad.png",
    "/images/marvel.png",
    "/images/vinted.png",
    "/images/news.png",
    "/images/portfolio.png",
  ];

  const {
    status,
    data: projects,
    error,
  } = useFetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME));

  //state pour useReducer
  // const [{ status, data: projects, error }, dispatch] = useReducer(
  //   fetchReducer,
  //   { status: "idle", data: null, error: null }
  // );

  // useEffect(() => {
  //   dispatch({ type: "pending" });
  //   fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
  //     .then((res) => res.json())
  //     .then((repo) => {
  //       dispatch({ type: "resolved", data: repo });
  //       console.log(repo);
  //     })
  //     .catch((err) => dispatch({ type: "rejected", error: err }));
  // }, []);

  if (status === "pending" || status === "idle") {
    return <Loader />;
  }

  if (error) {
    return <p>Error!</p>;
  }

  //CI DESSOUS LA METHODE AVEC LES 3 STATES (CLASSIQUE)--------------------

  // const [projects, setProjects] = useState(null);

  //state pour gestion d'erreur
  // const [error, setError] = useState(null);

  //loader à implémenter
  // const [isLoading, setIsloading] = useState(true);

  //on va utiliser un useEffect qui va gérer un fetch sur notre Github pour avoir les projets principaux

  //première méthode donnée par Melvynx
  // useEffect(() => {
  //   setIsloading(true);
  //   fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
  //     .then((res) => res.json())
  //     .then((repo) => {
  //       setProjects(repo);
  //       console.log(repo);
  //     })
  //     .catch((err) => setError(err))
  //     .finally(setIsloading(false));
  // }, []);

  //seconde méthode avec try/catch et async/await
  // useEffect(() => {
  //   setIsloading(true);
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch(
  //         getListOfUrlRepositoriesUrl(GITHUB_USERNAME)
  //       );
  //       const data = await response.json();
  //       setProjects(data);
  //       setIsloading(false);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  // const projects = [
  //   {
  //     name: "DEMO",
  //     description: "DEMO",
  //     stargazerCount: 12,
  //     url: "https://github.com",
  //     homepageUrl: "https://github.com",
  //   },
  // ];

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <p>Error!</p>;
  // }
  //------------------------------------------------------

  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaAtlassian
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
          />{" "}
          Projects
        </div>
      }
    >
      <div className="flex flex-wrap justify-center gap-8">
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
            />
          );
        })}
        {/* GitHub Repository - Exercise (replace this) */}
        {/* <Project {...projects[0]} /> */}
      </div>
    </SectionWrapper>
  );
};
