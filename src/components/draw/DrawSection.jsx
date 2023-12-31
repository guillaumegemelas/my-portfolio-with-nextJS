import { SectionWrapper } from "../atom/SectionWrapper";
import { Draw } from "./Draw";

import { FaUmbrellaBeach } from "react-icons/fa";

export const DrawSection = () => {
  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaUmbrellaBeach
            style={{
              fontSize: "28px",
              color: "#C424FF",
              marginRight: "15px",
            }}
          />{" "}
          Just have fun !
        </div>
      }
    >
      <Draw />
    </SectionWrapper>
  );
};
