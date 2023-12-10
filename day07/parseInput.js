export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n')
    .map((line) => {
      const [cards, rawBid] = line.split(' ');

      return {
        cards,
        bid: Number(rawBid),
      };
    });

  if (log) {
    console.log(input);
  }

  return input;
}
