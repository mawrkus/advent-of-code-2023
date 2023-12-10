export function parseInput(textInput, log = true) {
  const input = textInput.trim().split('\n');

  const seeds = input.shift().match(/\d+/g).map(Number);

  const mapGroups = [[]];
  let mapIndex = 0;

  input.shift();

  while (input.length) {
    const [, name] = input.shift().match(/.*-(.+) map:/);

    while (input.length) {
      const line = input.shift();

      if (line) {
        const [lowDest, lowSource, range] = line.match(/\d+/g).map(Number);
        const highSource = lowSource + range - 1;

        mapGroups[mapIndex].push({
          name,
          lowSource,
          highSource,
          lowDest,
          isInRange: (n) => n >= lowSource && n <= highSource,
          convert: (n) => n - lowSource + lowDest,
        });
      } else {
        mapGroups[++mapIndex] = [];
        break;
      }
    }
  }

  const parsed = { seeds, mapGroups };

  if (log) {
    console.log(parsed);
  }

  return parsed;
}
