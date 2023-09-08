import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="relative m-auto mb-12 flex max-w-4xl flex-col items-center md:flex-row">
      <img
        width={300}
        height={300}
        // src="/images/avatar.jpg"
        src="/images/photo_profil.jpg"
        alt="avatar"
        className="top-[-16px] right-[-42px] rounded-full shadow-lg md:absolute"
        //md:absolute l'image passe en dessous du texte
      />
      {/* Hero - Exercise*/}
      <div className="flex flex-col gap-4 md:relative md:mr-32">
        {/* Hero - Exercise*/}
        <h1 className="text-6xl dark:drop-shadow-[0_0px_20px_rgba(0,0,0,1)] md:text-6xl">
          I'm{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
          <b>React developper.</b> I’m a web JavaScript developper, specialized
          on React. I enhance my skills through daily self-learning with online
          courses, tutorials, and personal projects, and I am ready to put my
          technical skills to good use
        </p>
      </div>
    </div>
  );
};
