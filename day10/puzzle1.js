import { parseInput } from './parseInput.js';
// import sample from './sample1.js';
// const textInput = sample[0];
import textInput from './input.js';

import { visitMap } from './helpers/visitMap.js';
import { displayMap } from './helpers/displayMap.js';

function solve(input) {
  let output = 0;

  const { map, start } = input;

  const { visitedSet } = visitMap(map, start);

  displayMap(map, true, visitedSet);

  output = visitedSet.size / 2;

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
