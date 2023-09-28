import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <>
      <div className="relative m-auto mb-12 flex max-w-4xl flex-col items-center md:flex-row">
        <img
          width={300}
          height={300}
          // src="/images/avatar.jpg"
          src="/images/photo_profil.jpg"
          alt="avatar"
          className="top-[-16px] right-[-42px] rounded-full shadow-lg md:absolute"
          //md:absolute l'image passe en dessous du texte--
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
            <b>React developper.</b> I’m a web JavaScript developper,
            specialized on React. I enhance my skills through daily
            self-learning with online courses, tutorials, and personal projects,
            and I am ready to put my technical skills to good use
          </p>

          <p className="mt-36 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            <p className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold text-transparent">
              What can I do for you.
            </p>
            <b>I develop your websites</b> on both the client-side (Front-end)
            and server-side (Back-end). Below, you can find my projects, most of
            which have been created using ReactJS or NextJS.
          </p>
          <p className="mt-3 max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)]">
            Do not hesitate to contact me, I would be happy to review your
            project and respond as soon as possible
          </p>
        </div>
      </div>
    </>
  );
};
