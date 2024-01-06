import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { findReflection } from './helpers/findReflection.js';
import { displayPattern } from './helpers/displayPattern.js';

function solve(input) {
  let output = 0;

  for (const pattern of input) {
    const { left, top } = findReflection(pattern);

    if (top !== null) {
      output += (top + 1) * 100;
    }

    if (left !== null) {
      output += left + 1;
    }

    if (top === null && left === null) {
      throw new Error('No reflection!');
    }

    if (top !== null && left !== null) {
      throw new Error('Two reflections!');
    }

    displayPattern(pattern, { top, left });
  }

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
