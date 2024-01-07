import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

function computeAcceptedRanges(workflows, workFlowName, ranges) {
  const results = [];

  if (workFlowName === 'A') {
    return [ranges];
  }

  if (workFlowName === 'R') {
    return [];
  }

  let currentRanges = ranges;

  for (const { check, destination } of workflows[workFlowName]) {
    const { category, op, value } = check;

    if (category === null) {
      results.push(
        ...computeAcceptedRanges(workflows, destination, currentRanges)
      );
      continue;
    }

    const [low, high] = currentRanges[category];

    let categoryRange;
    let complementCategoryRange;

    if (op === '<') {
      categoryRange = [low, value - 1];
      complementCategoryRange = [value, high];
    } else if (op === '>') {
      categoryRange = [value + 1, high];
      complementCategoryRange = [low, value];
    }

    results.push(
      ...computeAcceptedRanges(workflows, destination, {
        ...currentRanges,
        [category]: categoryRange,
      })
    );

    currentRanges = {
      ...currentRanges,
      [category]: complementCategoryRange,
    };
  }

  return results;
}

function solve(input) {
  let output = 0;

  const { workflows } = input;

  const ranges = {
    x: [1, 4000],
    m: [1, 4000],
    a: [1, 4000],
    s: [1, 4000],
  };

  const results = computeAcceptedRanges(workflows, 'in', ranges);

  for (let i = 0; i < results.length; i += 1) {
    const ranges = results[i];

    output += Object.values(ranges).reduce(
      (acc, [low, high]) => acc * (high - low + 1),
      1
    );
  }

  return output;
}

const output = solve(parseInput(textInput, false));

console.log('→', output);
