import { Button } from "../atom/Button";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Typography } from "../atom/Typography";
import { MemoryBoard } from "./MemoryBoard";
import { MemoryContextProvider } from "./MemoryProvider";
import { useMemory } from "./MemoryProvider";

import { FaKeybase } from "react-icons/fa";

export const MemorySection = () => {
  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaKeybase
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
          />{" "}
          You're boring ? Let's play a game !
        </div>
      }
    >
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <p>Score go here</p>
            <TryCountText />
            <MemoryBoard />
            <ResetButton />
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

//affichage du score
const TryCountText = () => {
  const { tryCount, isFinish } = useMemory();

  if (isFinish) {
    return <Typography>Bravo tu as terminé en {tryCount} essais</Typography>;
  }

  if (!isFinish) {
    return (
      <Typography variant="body2">You tried {tryCount} time(s)</Typography>
    );
  }
};

//création du bouton reset
const ResetButton = () => {
  const { reset } = useMemory();

  return <Button onClick={reset}>Reset go here</Button>;
};
