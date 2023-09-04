import { Typography } from "../atom/Typography";
import { MemoryCard } from "./MemoryCard";
import { useMemory } from "./MemoryProvider";

export const MemoryBoard = () => {
  // Memory Game - Exercise
  const { cards, onReturnedCard } = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid w-max grid-cols-6 grid-rows-6 gap-2">
      {cards.map((card) => {
        // console.log(card);
        return (
          <MemoryCard
            key={card.id}
            card={card}
            onClick={() => onReturnedCard(card)}
          >
            {card.emoji}
          </MemoryCard>
        );
      })}
    </div>
  );
};
