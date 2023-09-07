import { SectionWrapper } from "../atom/SectionWrapper";
import { FaTools } from "react-icons/fa";

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
        <p>Hello!</p>
      </div>
    </SectionWrapper>
  );
};
