import {
  //FULL_NAME,
  SOCIAL_NETWORKS,
} from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header = () => {
  return (
    <header className="flex items-center py-8">
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
        {/* <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        {FULL_NAME}
      </span> */}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
          Bienvenue!
          {/* Welcome! */}
        </span>
      </div>

      <SocialNetworks className="ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};

// modifié le 05/10 FULLNAME-----
