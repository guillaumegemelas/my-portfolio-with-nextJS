import { ToggleThemeButton } from "./ToggleThemeButton";
import { useState } from "react";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNavMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-8">
      <div className="flex flex-col items-center md:flex-row">
        <img
          width={60}
          height={60}
          // src="/images/avatar.jpg"
          src="/images/photo_profil-2.jpg"
          alt="avatar Guillaume Gemelas"
          className="hidden rounded-full shadow-lg md:mr-6 md:block"
          //md:absolute l'image passe en dessous du texte--
        />

        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
          Bienvenue!
        </span>
      </div>

      <div className="flex items-center">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON mr-6 space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 bg-primary dark:bg-gray-300"></span>
              <span className="block h-0.5 w-8 bg-primary dark:bg-gray-300"></span>
              <span className="block h-0.5 w-8 bg-primary dark:bg-gray-300"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between">
                <li className="my-8 uppercase">
                  <a href="#Skills" onClick={closeNavMenu}>
                    <span className="text-secondary">1.</span>{" "}
                    <span className="text-gray-100">Compétences</span>{" "}
                  </a>
                </li>
                <li className="my-8 uppercase">
                  <a href="#Projets" onClick={closeNavMenu}>
                    <span className="text-secondary">2.</span>{" "}
                    <span className="text-gray-100">Projets</span>{" "}
                  </a>
                </li>
                <li className="my-8 uppercase">
                  <a href="#Comments" onClick={closeNavMenu}>
                    <span className="text-secondary">3.</span>{" "}
                    <span className="text-gray-100">Commentaires</span>{" "}
                  </a>
                </li>
                <li className="my-8 uppercase">
                  <a href="#Contact" onClick={closeNavMenu}>
                    <span className="text-secondary">4.</span>{" "}
                    <span className="text-gray-100 ">Contact</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
            <li>
              <a href="#Skills">
                <span className="text-secondary">1.</span>{" "}
                <span className="dark:text-gray-100 dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
                  Compétences
                </span>{" "}
              </a>
            </li>
            <li>
              <a href="#Projets">
                <span className="text-secondary">2.</span>{" "}
                <span className="dark:text-gray-100 dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
                  Projets
                </span>{" "}
              </a>
            </li>
            <li>
              <a href="#Comments">
                <span className="text-secondary">3.</span>{" "}
                <span className="dark:text-gray-100 dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
                  Commentaires
                </span>{" "}
              </a>
            </li>
            <li>
              <a href="#Contact">
                <span className="text-secondary">4.</span>{" "}
                <span className="mr-8 dark:text-gray-100 dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
                  Contact
                </span>{" "}
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(20, 27, 82, 0.95);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
      }
    `}</style>
        <ToggleThemeButton />
      </div>
    </header>
  );
};

// modifié le 05/10 FULLNAME-
