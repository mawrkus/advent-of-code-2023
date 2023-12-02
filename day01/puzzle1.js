import { parseInput } from './parseInput.js';
// import textInput from './sample1.js';
import textInput from './input.js';

function solve(input) {
  let output = 0;

  for (const line of input) {
    const matches = line.match(/(\d)/g);

    output += Number(matches.at(0) + matches.at(-1));
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
