import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { displayPlatform } from './helpers/displayPlatform.js';
import { tilt } from './helpers/tilt.js';
import { computeTotalLoad } from './helpers/computeTotalLoad.js';

function solve(platform) {
  let output = 0;

  displayPlatform(platform);

  for (let y = 1; y < platform.length; y += 1) {
    const line = platform[y];

    for (let x = 0; x < line.length; x += 1) {
      tilt('north', x, y, platform);
    }
  }

  displayPlatform(platform);

  output = computeTotalLoad(platform);

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
