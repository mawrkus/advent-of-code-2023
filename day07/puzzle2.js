import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { compareHandsFactory } from './helpers/compareHandsFactory.js';

const cardValues = new Map([
  ['A', 14],
  ['K', 13],
  ['Q', 12],
  ['T', 10],
  ['9', 9],
  ['8', 8],
  ['7', 7],
  ['6', 6],
  ['5', 5],
  ['4', 4],
  ['3', 3],
  ['2', 2],
  ['J', 1],
]);

function countCards(cards) {
  const countsMap = new Map();
  let jokersCount = 0;

  for (const card of cards) {
    if (card === 'J') {
      jokersCount += 1;
    } else {
      const count = countsMap.get(card) || 0;
      countsMap.set(card, count + 1);
    }
  }

  const sortedCounts = Array.from(countsMap.entries()).sort(
    ([, a], [, b]) => b - a
  );

  if (jokersCount > 0) {
    if (jokersCount === 5) {
      return '5';
    }

    sortedCounts[0][1] += jokersCount;
  }

  return sortedCounts.reduce((acc, [, count]) => acc + count, '');
}

function solve(input) {
  let output = 0;

  const hands = input.map((hand) => ({
    ...hand,
    counts: countCards(hand.cards),
  }));

  const orderedHands = hands.sort(compareHandsFactory(cardValues));

  let rank = 1;

  for (const { bid } of orderedHands) {
    output += rank * bid;
    rank += 1;
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
