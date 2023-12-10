export function computeDiffs(values) {
  const diffs = [];

  for (let i = 1; i < values.length; i += 1) {
    diffs.push(values[i] - values[i - 1]);
  }

  return diffs;
}
