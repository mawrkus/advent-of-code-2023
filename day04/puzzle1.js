import { parseInput } from "./parseInput.js";
// import textInput from "./sample.js";
import textInput from "./input.js";

function solve(input) {
  let output = 0;

  for (const { winningNumbers, myNumbers } of input) {
    let matches = 0;

    for (const myNumber of myNumbers) {
      if (winningNumbers.has(myNumber)) {
        matches += 1;
      }
    }

    if (matches) {
      output += 2 ** (matches - 1);
    }
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log("→", output);
