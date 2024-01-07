import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { displayPlan } from './helpers/displayPlan.js';

const dirs = new Map([
  ['R', [+1, 0]],
  ['L', [-1, 0]],
  ['D', [0, +1]],
  ['U', [0, -1]],
]);

const dir2Tile = new Map([
  ['U', '|'],
  ['D', '|'],
  ['R', '-'],
  ['L', '-'],
  ['RD', '7'],
  ['UL', '7'],
  ['LD', 'F'],
  ['UR', 'F'],
  ['DR', 'L'],
  ['LU', 'L'],
  ['DL', 'J'],
  ['RU', 'J'],
]);

const connections = new Map([
  ['|', new Set(['U', 'D'])],
  ['-', new Set(['L', 'R'])],
  ['L', new Set(['U', 'R'])],
  ['J', new Set(['U', 'L'])],
  ['7', new Set(['D', 'L'])],
  ['F', new Set(['D', 'R'])],
]);

function buildDigPlan(instructions) {
  const digPlan = new Map();

  let x = 0;
  let y = 0;
  let xMin = 0;
  let xMax = 0;

  let perimeter = 0;
  let lastDir = null;

  for (const { dir, distance } of instructions) {
    const symbol = dir2Tile.get(dir);

    if (dir2Tile.has(lastDir + dir)) {
      const line = digPlan.get(y) || new Map();

      line.set(x, dir2Tile.get(lastDir + dir));

      digPlan.set(y, line);
    }

    const [incX, incY] = dirs.get(dir);

    for (let i = 0; i < distance; i += 1) {
      x += incX;
      y += incY;

      const line = digPlan.get(y) || new Map();

      line.set(x, symbol);

      digPlan.set(y, line);
    }

    xMin = Math.min(xMin, x);
    xMax = Math.max(xMax, x);

    perimeter += distance;
    lastDir = dir;
  }

  digPlan
    .get(0)
    .set(0, dir2Tile.get(instructions.at(-1).dir + instructions.at(0).dir));

  return { digPlan, perimeter, xMin, xMax };
}

// similar to day10 part 2
function calculateSurface(digPlan) {
  let enclosedSize = 0;

  for (const [, line] of digPlan) {
    const sortedLine = Array.from(line.entries()).sort(([a], [b]) => a - b);

    let [lastX] = sortedLine[0];
    let crossCount = 0;

    for (const [x, tile] of sortedLine) {
      if (crossCount % 2 && x > lastX + 1) {
        enclosedSize += x - lastX - 1;
      }

      lastX = x;

      if (connections.get(tile).has('U')) {
        crossCount += 1;
      }
    }
  }

  return enclosedSize;
}

function solve(input) {
  let output = 0;

  const { digPlan, perimeter, xMin, xMax } = buildDigPlan(input);

  output = calculateSurface(digPlan) + perimeter;

  displayPlan(digPlan, xMin, xMax);

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
