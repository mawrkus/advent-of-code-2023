export function parseInput(textInput, log = true) {
  const input = textInput.trim().split("\n");
  // .map((line) => line.split(""));

  if (log) {
    console.log(input);
  }

  return input;
}
