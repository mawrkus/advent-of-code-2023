export function computeTotalLoad(platform) {
  let totalLoad = 0;

  const rowsCount = platform.length;

  for (let y = 0; y < rowsCount; y += 1) {
    const line = platform[y];

    for (let x = 0; x < line.length; x += 1) {
      if (line[x] === 'O') {
        totalLoad += rowsCount - y;
      }
    }
  }

  return totalLoad;
}
