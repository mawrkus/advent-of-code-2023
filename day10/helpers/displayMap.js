const charsMap = new Map([
  ['|', '│'],
  ['-', '─'],
  ['L', '╰'],
  ['J', '╯'],
  ['7', '╮'],
  ['F', '╭'],
  ['S', '*'],
  ['.', '.'],
]);

export function displayMap(
  map,
  mapSymbols = false,
  visitedSet = new Set(),
  enclosedSet = new Set()
) {
  console.log();

  for (let y = 0; y < map.length; y += 1) {
    const line = map[y].reduce((acc, symbol, x) => {
      const mappedSymbol = mapSymbols ? charsMap.get(symbol) : symbol;

      if (symbol === 'S') {
        return acc + `\x1b[48;5;160m${mappedSymbol}\u001b[0m`;
      }

      if (visitedSet.has(String([x, y]))) {
        return acc + `\u001b[38;5;15m${mappedSymbol}\u001b[0m`;
      }

      if (enclosedSet.has(String([x, y]))) {
        return acc + `\u001b[1;34m*\u001b[0m`;
      }

      return acc + mappedSymbol;
    }, '');

    console.log(line);
  }

  console.log();
}
