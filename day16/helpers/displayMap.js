export function displayMap(map, energized) {
  console.log();

  for (let y = 0; y < map.length; y += 1) {
    const line = map[y].reduce((acc, symbol, x) => {
      if (energized.has([x, y])) {
        return acc + `\u001b[38;5;15m#\u001b[0m`;
      }

      if (['|', '-', '/', '\\'].includes(symbol)) {
        return acc + `\u001b[1;34m${symbol}\u001b[0m`;
      }

      return acc + symbol;
    }, '');

    console.log(line);
  }

  console.log();
}
