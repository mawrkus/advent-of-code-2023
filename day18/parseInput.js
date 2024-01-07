const hexDirMap = ['R', 'D', 'L', 'U'];

export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n')
    .map((line) => {
      const [, dir, rawDistance, color] = line.match(
        /(R|L|D|U) (\d+) \((#[a-z0-9]+)\)/
      );

      return {
        dir,
        distance: Number(rawDistance),
        color,
        decoded: {
          dir: hexDirMap[color.at(-1)],
          distance: parseInt(color.slice(1, 6), 16),
        },
      };
    });

  if (log) {
    console.log(input);
  }

  return input;
}
