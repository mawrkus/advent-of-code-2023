import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { findReflection } from './helpers/findReflection.js';
import { displayPattern } from './helpers/displayPattern.js';

function* fixSmudges(pattern) {
  for (let y = 0; y < pattern.length; y += 1) {
    const line = pattern[y].split('');

    for (let x = 0; x < pattern[y].length; x += 1) {
      const char = line[x];
      const newChar = char === '#' ? '.' : '#';

      line[x] = newChar;
      pattern[y] = line.join('');

      yield pattern;

      line[x] = char;
    }

    pattern[y] = line.join('');
  }
}

function solve(input) {
  let output = 0;

  for (let i = 0; i < input.length; i += 1) {
    const pattern = input[i];
    const prev = findReflection(pattern);

    let result = null;

    for (const patternWithoutSmudge of fixSmudges(pattern)) {
      result = findReflection(patternWithoutSmudge, prev.top, prev.left);

      if (result.top !== null) {
        displayPattern(patternWithoutSmudge, result);
        output += (result.top + 1) * 100;
        break;
      }

      if (result.left !== null) {
        displayPattern(patternWithoutSmudge, result);
        output += result.left + 1;
        break;
      }
    }

    if (!result) {
      throw 'No reflection!';
    }

    if (result && result.top !== null && result.left !== null) {
      throw new Error('Two reflections!');
    }
  }

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
