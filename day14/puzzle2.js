import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { displayPlatform } from './helpers/displayPlatform.js';
import { tilt } from './helpers/tilt.js';
import { computeTotalLoad } from './helpers/computeTotalLoad.js';

function spinCycle(platform) {
  for (let y = 1; y < platform.length; y += 1) {
    for (let x = 0; x < platform[y].length; x += 1) {
      tilt('north', x, y, platform);
    }
  }

  for (let x = 1; x < platform[0].length; x += 1) {
    for (let y = 0; y < platform.length; y += 1) {
      tilt('west', x, y, platform);
    }
  }

  for (let y = platform.length - 2; y >= 0; y -= 1) {
    for (let x = 0; x < platform[y].length; x += 1) {
      tilt('south', x, y, platform);
    }
  }

  for (let x = platform[0].length - 2; x >= 0; x -= 1) {
    for (let y = 0; y < platform.length; y += 1) {
      tilt('east', x, y, platform);
    }
  }

  return computeTotalLoad(platform);
}

function findLoadCycle(loads) {
  const loadsCount = loads.length;

  let tortoise = 0;
  let hare = 1;

  do {
    tortoise += 1;
    hare += 2;

    if (tortoise >= loadsCount || hare >= loadsCount) {
      return null;
    }
  } while (loads[tortoise] !== loads[hare]);

  const start = tortoise;

  do {
    tortoise += 1;
    hare += 2;

    if (tortoise >= loadsCount || hare >= loadsCount) {
      return null;
    }
  } while (loads[tortoise] !== loads[hare]);

  return { start, length: tortoise - start };
}

function solve(platform) {
  let output = 0;

  displayPlatform(platform);

  const loads = [];
  let cycle;

  while (true) {
    const totalLoad = spinCycle(platform);

    loads.push(totalLoad);

    if (loads.length >= 400 && !(loads.length % 100)) {
      cycle = findLoadCycle(loads);

      if (cycle) {
        console.log('cycle found after %d iterations!', loads.length, cycle);
        console.log();
        break;
      }
    }
  }

  output = loads[cycle.start + ((1000000000 - cycle.start) % cycle.length) - 1];

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
