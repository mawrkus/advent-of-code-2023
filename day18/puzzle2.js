import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

const dirs = new Map([
  ['R', [+1, 0]],
  ['L', [-1, 0]],
  ['D', [0, +1]],
  ['U', [0, -1]],
]);

function buildDigPlan(instructions) {
  let x = 0;
  let y = 0;

  const points = [];

  let perimeter = 0;

  for (const { decoded } of instructions) {
    const { dir, distance } = decoded;

    const [incX, incY] = dirs.get(dir);

    x += incX * distance;
    y += incY * distance;

    points.push([x, y]);

    perimeter += distance;
  }

  return { points, perimeter };
}

// thank you Albert Bendicho's colleague :)
function calculateSurface(points, perimeter) {
  let area = 0;

  // https://en.wikipedia.org/wiki/Shoelace_formula
  for (let i = 0; i < points.length; i += 1) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % points.length];

    area += x1 * y2 - x2 * y1;
  }

  area /= 2;

  console.log('\nperimeter =', perimeter);
  console.log('area =', area);
  console.log();

  // https://en.wikipedia.org/wiki/Pick%27s_theorem
  const surface = 1 + area + perimeter / 2;

  return surface;
}

function solve(input) {
  let output = 0;

  const { points, perimeter } = buildDigPlan(input);

  output = calculateSurface(points, perimeter);

  return output;
}

const output = solve(parseInput(textInput, true));

console.log('→', output);
