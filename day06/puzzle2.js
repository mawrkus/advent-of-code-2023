import { parseInput } from './parseInput.js';
// import textInput from "./sample.js";
import textInput from './input.js';

// same as puzzle1, only the input is parsed differently
function solve(input) {
  let output = 1;

  for (const race of input) {
    // we solve t * (race.totalTime - t) > race.maxDistance
    const a = -1;
    const b = race.totalTime;
    const c = -race.maxDistance;
    const d = b * b - 4 * a * c;

    if (d < 0) {
      continue; // no solutions
    }

    let waysToWin;

    if (d === 0) {
      waysToWin = 1; // one solution
    } else if (d > 0) {
      // two solutions
      const t1 = ((-b + Math.sqrt(d)) / 2) * a;
      const t2 = ((-b - Math.sqrt(d)) / 2) * a;

      waysToWin = Math.ceil(t2 - 1) - Math.floor(t1 + 1) + 1;
    }

    output *= waysToWin;
  }

  return output;
}

const output = solve(parseInput(textInput, true, 2));

console.log('→', output);
