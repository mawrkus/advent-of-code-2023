import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { compareHandsFactory } from './helpers/compareHandsFactory.js';

const cardValues = new Map([
  ['A', 14],
  ['K', 13],
  ['Q', 12],
  ['J', 11],
  ['T', 10],
  ['9', 9],
  ['8', 8],
  ['7', 7],
  ['6', 6],
  ['5', 5],
  ['4', 4],
  ['3', 3],
  ['2', 2],
]);

function countCards(cards) {
  const countsMap = new Map();

  for (const card of cards) {
    const count = countsMap.get(card) || 0;
    countsMap.set(card, count + 1);
  }

  return Array.from(countsMap.values())
    .sort((a, b) => b - a)
    .reduce((acc, count) => acc + count, '');
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
