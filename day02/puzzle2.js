import { parseInput } from "./parseInput.js";
// import textInput from "./sample.js";
import textInput from "./input.js";

function solve(input) {
  let output = 0;

  for (const line of input) {
    const [, , rawTurns] = line.match(/Game (\d+): (.+)/);

    const maxima = { red: 0, green: 0, blue: 0 };

    for (const turn of rawTurns.split(";")) {
      for (const [, rawNumber, color] of turn.matchAll(/(\d+) ([^,]+)/g)) {
        const number = Number(rawNumber);

        if (number > maxima[color]) {
          maxima[color] = number;
        }
      }
    }

    const power = maxima.red * maxima.green * maxima.blue;

    output += power;
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log("→", output);
