export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  if (log) {
    console.log(input);
  }

  return input;
}
