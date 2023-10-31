import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Typography } from "./atom/Typography";
import { RiContactsLine } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 p-4 md:p-8 ">
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
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          {/* I’ll be happy to chat with you about a potential job or a freelance */}
          Je serai ravi d'échanger avec vous.
        </Typography>
        <a
          className="text-base underline text-primary"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>

        <a className="flex items-center text-base text-primary">
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
