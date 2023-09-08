import { SectionWrapper } from "../atom/SectionWrapper";
import { FaTools } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GrStripe } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { SiAwsamplify } from "react-icons/si";
import { AiOutlineCloud } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

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
      <div className="m-auto flex flex-col gap-4 md:flex-row">
        <div className="mb-8 md:mr-12 lg:mb-0">
          {/* //titre à mettre en gros et gras */}
          <h1 className="mb-4 text-center text-lg font-extrabold ">
            Front-End
          </h1>
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
        <div className="mb-8 md:mr-12 md:ml-12 lg:mb-0">
          <h1 className="mb-4 text-center text-lg font-extrabold ">Back-End</h1>
          <ul>
            <li className="flex items-center">
              {" "}
              <FaNode
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Node.js
            </li>
            <li className="flex items-center">
              <SiExpress
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Express.js
            </li>
            <li className="flex items-center">
              {" "}
              <SiAwsamplify
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Axios
            </li>
            <li className="flex items-center">
              {" "}
              <AiOutlineCloud
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Cloudinary
            </li>
            <li className="flex items-center">
              <SiMongodb
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              MongoDB
            </li>
          </ul>
        </div>
        <div className="md:ml-12">
          <h1 className="mb-4 text-center text-lg font-extrabold ">Design</h1>
          <ul>
            <li className="flex items-center">
              {" "}
              <FaFigma
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Figma
            </li>
            <li className="flex items-center">
              <SiTailwindcss
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Tailwind
            </li>
            <li className="flex items-center">
              <TbBrandBootstrap
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              Bootstrap
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};
