import { parseInput } from "./parseInput.js";
// import textInput from "./sample.js";
import textInput from "./input.js";

const counts = { red: 12, green: 13, blue: 14 };

function solve(input) {
  let output = 0;

  for (const line of input) {
    const [, rawGameId, rawTurns] = line.match(/Game (\d+): (.+)/);

    let possible = true;

    for (const turn of rawTurns.split(";")) {
      for (const [, rawNumber, color] of turn.matchAll(/(\d+) ([^,]+)/g)) {
        if (Number(rawNumber) > counts[color]) {
          possible = false;
          break;
        }
      }

      if (!possible) {
        break;
      }
    }

    if (possible) {
      output += Number(rawGameId);
    }
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log("→", output);
