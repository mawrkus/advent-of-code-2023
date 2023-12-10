import { parseInput } from './parseInput.js';
// import textInput from "./sample2-1.js";
import textInput from './input.js';

function solve(input) {
  let output = 0;

  const { instructions, nodes } = input;

  const nodeNames = Object.keys(nodes).filter((name) => name.at(-1) === 'A');
  const cycles = [];

  for (const name of nodeNames) {
    let step = 0;
    let nodeName = name;

    do {
      for (const side of instructions) {
        nodeName = nodes[nodeName][side];
        step += 1;
      }
    } while (nodeName.at(-1) !== 'Z');

    cycles.push(step);
  }

  console.log('cycles', cycles.sort());

  // applying maths would certainly be faster than this :)
  const longestCycle = cycles.pop();
  const fasterCycles = cycles;

  output = longestCycle;

  while (fasterCycles.some((n) => (output - n) % n)) {
    output += longestCycle;
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
