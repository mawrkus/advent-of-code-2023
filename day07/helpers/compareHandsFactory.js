import { handTypes } from './handTypes.js';

const compareCardsFactory = (cardValues) => (cardsA, cardsB) => {
  let i = -1;

  do {
    i += 1;
  } while (cardsA[i] === cardsB[i]);

  return cardValues.get(cardsA[i]) - cardValues.get(cardsB[i]);
};

export const compareHandsFactory = (cardValues) => {
  const compareCards = compareCardsFactory(cardValues);

  return (
    { counts: countsA, cards: cardsA },
    { counts: countsB, cards: cardsB }
  ) => {
    // lower index -> stronger hand
    const diff =
      handTypes.findIndex((counts) => counts === countsB) -
      handTypes.findIndex((counts) => counts === countsA);

    if (diff === 0) {
      return compareCards(cardsA, cardsB);
    }

    return diff;
  };
};
