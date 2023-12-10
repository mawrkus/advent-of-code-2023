import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { computeDiffs } from './helpers/computeDiffs.js';

function solve(input) {
  let output = 0;

  for (const line of input) {
    let values = line;
    const previousValues = [values.at(0)];

    do {
      values = computeDiffs(values);
      previousValues.unshift(values.at(0));
    } while (values.some((n) => n !== 0));

    output += previousValues.reduce((acc, n) => n - acc, 0);

    console.log();
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
