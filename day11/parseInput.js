export function parseInput(textInput, log = true) {
  const input = textInput
    .trim()
    .split('\n')
    .map((line) => line.split(''));

  const positions = [];

  const shiftsX = new Set(
    Array(input[0].length)
      .fill(0)
      .map((n, i) => i)
  );
  const shiftsY = new Set(
    Array(input.length)
      .fill(0)
      .map((n, i) => i)
  );

  for (let y = 0; y < input.length; y += 1) {
    const line = input[y];
    let x = -1;

    while (true) {
      x = line.indexOf('#', x + 1);

      if (x > -1) {
        positions.push([x, y]);

        shiftsX.delete(x);
        shiftsY.delete(y);
      } else {
        break;
      }
    }
  }

  const parsed = {
    positions,
    shiftsX: Array.from(shiftsX),
    shiftsY: Array.from(shiftsY),
  };

  if (log) {
    console.log(parsed);
  }

  return parsed;
}
