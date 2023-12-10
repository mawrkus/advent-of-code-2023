import { parseInput } from './parseInput.js';
// import textInput from "./sample1-1.js";
import textInput from './input.js';

function solve(input) {
  let output = 0;

  const { instructions, nodes } = input;

  let nodeName = 'AAA';

  do {
    for (const side of instructions) {
      nodeName = nodes[nodeName][side];
      output += 1;
    }
  } while (nodeName !== 'ZZZ');

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
