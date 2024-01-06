export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n')
    .map((line) => line.split(''));

  // TODO: add dimensions

  if (log) {
    console.log(input);
  }

  return input;
}
