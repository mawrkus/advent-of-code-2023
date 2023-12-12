import { displayMap } from './helpers/displayMap.js';

export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n')
    .map((line) => line.split(''));

  let start;

  for (let y = 0; y < input.length; y += 1) {
    for (let x = 0; x < input[y].length; x += 1) {
      if (input[y][x] === 'S') {
        start = [x, y];
      }
    }
  }

  const parsed = {
    start,
    map: input,
  };

  if (log) {
    console.log(parsed);
  }

  return parsed;
}
