import { FULL_NAME, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header = () => {
  return (
    <header className="flex py-8">
      <img
        width={60}
        height={60}
        // src="/images/avatar.jpg"
        src="/images/photo_profil.jpg"
        alt="avatar"
        className="top-[65px]  rounded-full shadow-lg md:absolute"
        //md:absolute l'image passe en dessous du texte--
      />
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        {FULL_NAME}
      </span>
      <SocialNetworks className="ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};
