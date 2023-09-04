import { createContext, useState, useContext, useMemo, useEffect } from "react";
import { CARD_STATE, getInitialMemory, isPairCards } from "../../lib/memory";
import { isMemoryFinished } from "../../lib/memory";

//1.Création du contexte
const MemoryContext = createContext({});

//2.Création de la fct useContext
export const useMemory = () => {
  const context = useContext(MemoryContext);

  if (!context) {
    throw Error("useMemory must be used inside MemoryContextProvider");
  }
  return context;
};

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory()); // utiliser une fonction ici !

  //state pour compter le nombre de fois ou le user retourne une carte
  const [tryCount, setTryCount] = useState(0);

  //vérifier si c'est fini quand toutes les cartes sont retournées
  const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);

  const onReturnedCard = (returnedCard) => {
    // console.log(returnedCard);
    //ensuite on va gérer la logique lorsqu'on retourne une carte

    //si la carte n'est pas cachée on en fait rien
    if (returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }

    //on va récupérer toutes les cartes qui sont déjà retournées
    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

    console.log({ returnedCards });
    //si il a déjà cliqué sur la meme carte ou qu'il a cliqué sur 2 cartes
    if (returnedCards.length === 2 || returnedCards.includes(returnedCard)) {
      return;
    }
    setCards((current) =>
      current.map((card) => {
        if (returnedCard.id === card.id) {
          card.state = CARD_STATE.RETURNED;
        }
        return card;
      })
    );

    //si le nb de card retourné === 0, on ne fait rien;
    if (returnedCards.length === 0) {
      return;
    }
    returnedCards.push(returnedCard);
    computeReturnedCards(returnedCards);
  };

  //il va falloir maintenant gérer la logique du retournement des cartes
  //Avec un useEffect?
  useEffect(() => {
    //or, il n'y a rien à synchroniser donc on ne va pas utiliser de useEffect ici
  }, [cards]);

  //fonction pour voir ce qu'il faut faire avec les cartes
  const computeReturnedCards = (returnedCards) => {
    //fonction isPairCards créée dans memory.js
    const isPair = isPairCards(returnedCards[0], returnedCards[1]);

    setTimeout(
      () => {
        setTryCount((current) => current + 1);
        setCards((current) => {
          return current.map((card) => {
            if (
              card.state === CARD_STATE.RETURNED &&
              returnedCards.includes(card)
            ) {
              card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
            }
            return card;
          });
        });
      },
      isPair ? 40 : 1000
    );
  };

  //fonction reset
  const reset = () => {
    setCards(getInitialMemory());
    setTryCount(0);
  };

  const values = { cards, tryCount, reset, onReturnedCard, isFinish };

  // const isFinish = useMemo(() => isMemoryFinished(cards), [cards]); // on recherche que quand cards change

  return (
    <MemoryContext.Provider value={values}>
      <div>{children}</div>
    </MemoryContext.Provider>
  );
};

//ensuite aller dans MemoryBoard et utiliser le contexte
