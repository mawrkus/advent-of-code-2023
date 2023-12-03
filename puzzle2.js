import { parseInput } from "./parseInput.js";
// import textInput from "./sample.js";
import textInput from "./input.js";

import { isSymbol } from "./helpers/isSymbol.js";
import { getAdjacentParts } from "./helpers/getAdjacentParts.js";

function solve(input) {
  let output = 0;

  for (let y = 0; y < input.length; y += 1) {
    for (let x = 0; x < input[y].length; x += 1)
      if (isSymbol(input[y][x])) {
        const partNumbers = getAdjacentParts(input, x, y);

        if (partNumbers.length === 2) {
          output += partNumbers[0] * partNumbers[1];
        }
      }
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log("→", output);
