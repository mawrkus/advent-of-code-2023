import { parseInput } from './parseInput.js';
// import sample from './sample2.js';
// const textInput = sample[3];
import textInput from './input.js';

import { visitMap } from './helpers/visitMap.js';
import { displayMap } from './helpers/displayMap.js';
import { connections } from './helpers/findNextPositions.js';

function solve(input) {
  let output = 0;

  const { map, start } = input;

  const { visitedSet, wasVisited } = visitMap(map, start);

  /* *** */

  const enclosedSet = new Set();
  const markAsEnclosed = (pos) => enclosedSet.add(String(pos));

  for (let y = 0; y < map.length; y += 1) {
    const line = map[y];
    let crossCount = 0;

    for (let x = 0; x < line.length; x += 1) {
      if (!wasVisited([x, y])) {
        if (crossCount % 2) {
          markAsEnclosed([x, y]);
        }

        continue;
      }

      if (line[x] === 'S') {
        if (connections.get(map[y - 1]?.[x])?.has('south')) {
          crossCount += 1;
        }

        continue;
      }

      if (connections.get(line[x]).has('north')) {
        crossCount += 1;
      }
    }
  }

  displayMap(map, false, visitedSet, enclosedSet);
  displayMap(map, true, visitedSet, enclosedSet);

  output = enclosedSet.size;

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
