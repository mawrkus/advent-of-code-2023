export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split("\n")
    .map((line) => {
      const [, rawCardNumber, rawWinningNumbers, rawMyNumbers] = line.match(
        /Card\W+(\d+): (.+) \| (.+)/
      );

      const winningNumbers = [...rawWinningNumbers.matchAll(/\d+/g)].map(
        Number
      );
      const myNumbers = [...rawMyNumbers.matchAll(/\d+/g)].map(Number);

      return {
        cardNumber: Number(rawCardNumber),
        winningNumbers: new Set(winningNumbers),
        myNumbers: new Set(myNumbers),
      };
    });

  if (log) {
    console.log(input);
  }

  return input;
}
