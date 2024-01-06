export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n')
    .map((line) => line.split(''));

  const parsed = {
    map: input,
    width: input[0].length,
    height: input.length,
  };

  if (log) {
    console.log(parsed);
  }

  return parsed;
}
