import { parseInput } from "./parseInput.js";
// import textInput from "./sample.js";
import textInput from "./input.js";

function solve(input) {
  let output = 0;
  let cardCounts = new Array(input.length).fill(1);

  for (let cardIndex = 0; cardIndex < input.length; cardIndex += 1) {
    let matches = 0;

    const { winningNumbers, myNumbers } = input[cardIndex];

    for (const myNumber of myNumbers) {
      if (winningNumbers.has(myNumber)) {
        matches += 1;
      }
    }

    if (matches) {
      for (let j = cardIndex + 1; j <= cardIndex + matches; j += 1) {
        cardCounts[j] += cardCounts[cardIndex];
      }
    }

    output += cardCounts[cardIndex];
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log("→", output);
