import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { displayMap } from './helpers/displayMap.js';
import { simulate } from './helpers/simulate.js';

function solve(input) {
  let output = 0;

  const { map } = input;

  const energized = simulate(map, { x: -1, y: 0, dir: 'east' });

  displayMap(map, energized);

  output = energized.size;

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
