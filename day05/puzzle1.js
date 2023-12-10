import { parseInput } from './parseInput.js';
// import textInput from "./sample.js";
import textInput from './input.js';

function solve(input) {
  let output = Infinity;

  const { seeds, mapGroups } = input;

  for (const seed of seeds) {
    let n = seed;

    for (const mappings of mapGroups) {
      for (const { isInRange, convert } of mappings) {
        if (isInRange(n)) {
          n = convert(n);
          break;
        }
      }
    }

    output = Math.min(output, n);
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
