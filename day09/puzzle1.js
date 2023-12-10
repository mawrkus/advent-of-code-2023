import { parseInput } from './parseInput.js';
// import textInput from "./sample.js";
import textInput from './input.js';

import { computeDiffs } from './helpers/computeDiffs.js';

function solve(input) {
  let output = 0;

  for (const line of input) {
    let values = line;
    const nextValues = [values.at(-1)];

    do {
      values = computeDiffs(values);
      nextValues.push(values.at(-1));
    } while (values.some((n) => n !== 0));

    output += nextValues.reduce((acc, n) => n + acc, 0);
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
