import {
  SiGithub,
  SiLinkedin,
  // SiTwitter
} from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

export const GITHUB_USERNAME = "guillaumegemelas";

export const EMAIL = "guillaumegemelas@gmail.com";

export const FULL_NAME = "Guillaume Gemelas";

export const SOCIAL_NETWORKS = [
  {
    url: "https://www.facebook.com/people/Guillaume-Gemelas-aindev/61557617930908/",
    name: "Facebook",
    icon: <FaFacebook />,
  },
  {
    url: "https://www.linkedin.com/in/guillaume-gemelas-a88880230/",
    name: "Linkedin",
    icon: <SiLinkedin />,
  },
  {
    url: "https://github.com/guillaumegemelas",
    name: "Github",
    icon: <SiGithub />,
  },
];
