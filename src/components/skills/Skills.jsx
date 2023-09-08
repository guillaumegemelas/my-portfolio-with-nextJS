import { SectionWrapper } from "../atom/SectionWrapper";
import { FaTools } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GrStripe } from "react-icons/gr";

export const Skills = () => {
  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaTools
            style={{
              fontSize: "28px",
              color: "#C424FF",
              marginRight: "15px",
            }}
          />{" "}
          Skills
        </div>
      }
    >
      <div className="m-auto flex gap-4">
        <div>
          {/* //titre à mettre en gros et gras */}
          <h1>Front-End</h1>
          <ul>
            <li className="flex items-center">
              <SiJavascript
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              JavaScript
            </li>
            <li className="flex items-center">
              {" "}
              <SiTypescript
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              TypeScript
            </li>
            <li className="flex items-center">
              <FaReact
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />{" "}
              React
            </li>
            <li className="flex items-center">
              <SiNextdotjs
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Next.js
            </li>
            <li className="flex items-center">
              <FaHtml5
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />{" "}
              HTML
            </li>
            <li className="flex items-center">
              {" "}
              <GrStripe
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Stripe
            </li>
          </ul>
        </div>
        <div>
          <h1>Back-End</h1>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Axios</li>
            <li>Cloudinary</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h1>Design</h1>
          <ul>
            <li>Figma</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};
