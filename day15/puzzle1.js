import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { hash } from './helper/hash.js';

function solve(input) {
  let output = 0;

  for (const { step } of input) {
    output += hash(step);
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
