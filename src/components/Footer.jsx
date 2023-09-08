import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Typography } from "./atom/Typography";
import { RiContactsLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 p-4 md:p-8 ">
      <Typography variant="h2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiContactsLine
            style={{
              fontSize: "28px",
              color: "#C424FF",
              marginRight: "15px",
            }}
          />{" "}
          Contact me !
        </div>
      </Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          I’ll be happy to chat with you about a potential job or a freelance
        </Typography>
        <a
          className="text-base text-primary underline"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
      {/* <p>
      
        Created for educational purpose for the{' '}
        <a href="https://codelynx.dev/beginreact">BeginReact.dev formation</a> !
      </p> */}
    </footer>
  );
};
