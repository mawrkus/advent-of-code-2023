export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n\n')
    .map((pattern) => pattern.split('\n'));

  if (log) {
    console.log(input);
  }

  return input;
}
