import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { displayMap } from './helpers/displayMap.js';
import { simulate } from './helpers/simulate.js';

function solve(input) {
  let output = 0;

  const { map, width, height } = input;

  const candidateBeams = [];

  for (let x = 0; x < width; x += 1) {
    candidateBeams.push({ x, y: -1, dir: 'south' });
    candidateBeams.push({ x, y: height, dir: 'north' });
  }

  for (let y = 0; y < height; y += 1) {
    candidateBeams.push({ x: -1, y, dir: 'east' });
    candidateBeams.push({ x: width, y, dir: 'west' });
  }

  for (const beamStart of candidateBeams) {
    const energized = simulate(map, beamStart);

    // displayMap(map, energized);

    output = Math.max(output, energized.size);
  }

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
