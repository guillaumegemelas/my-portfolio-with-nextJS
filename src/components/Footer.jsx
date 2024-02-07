import { SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Typography } from "./atom/Typography";
import { RiContactsLine } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { Contact } from "./Contact";

export const Footer = () => {
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
          {/* I’ll be happy to chat with you about a potential job or a freelance */}
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
      </div>
      {/* <p>
      
        Created for educational purpose for the{' '}
        <a href="https://codelynx.dev/beginreact">BeginReact.dev formation</a>   !
      </p> */}
    </footer>
  );
};
