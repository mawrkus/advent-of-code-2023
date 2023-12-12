import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { shiftPositions } from './helpers/shiftPositions.js';

function solve(input) {
  let output = 0;

  const { positions, shiftsX, shiftsY } = input;

  const shiftedPositions = shiftPositions(positions, shiftsX, shiftsY);

  for (let i = 0; i < shiftedPositions.length - 1; i += 1) {
    const [x1, y1] = shiftedPositions[i];

    for (let j = i + 1; j < shiftedPositions.length; j += 1) {
      const [x2, y2] = shiftedPositions[j];

      output += Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
