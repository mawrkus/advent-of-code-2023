const sortFn = ([a], [b]) => a - b;

export function displayPlan(digPlan, xMin, xMax) {
  console.log();

  const sortedPlan = Array.from(digPlan.entries()).sort(sortFn);

  for (const [, line] of sortedPlan) {
    let logLine = '';

    // fill in
    for (let x = xMin; x <= xMax; x += 1) {
      if (!line.has(x)) {
        line.set(x, null);
      }
    }

    const sortedLine = Array.from(line.entries()).sort(sortFn);

    for (const [, tile] of sortedLine) {
      logLine += tile ? `\u001b[38;5;15m${tile}\u001b[0m` : '.';
    }

    console.log(logLine);
  }

  console.log();
}
