import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

function applyWorkflow(rules, rating) {
  const { destination } = rules.find((rule) =>
    rule.check.opFn(rating[rule.check.category])
  );

  return destination;
}

function applyWorkflows(workflows, rating) {
  let workFlowName = 'in';

  do {
    workFlowName = applyWorkflow(workflows[workFlowName], rating);
  } while (workFlowName !== 'A' && workFlowName !== 'R');

  return workFlowName === 'A';
}

function solve(input) {
  let output = 0;

  const { workflows, ratings } = input;

  for (const rating of ratings) {
    if (applyWorkflows(workflows, rating)) {
      output += rating.x + rating.m + rating.a + rating.s;
    }
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
