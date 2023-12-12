export const dirs = new Map([
  ['north', [[0, -1], 'south']],
  ['south', [[0, +1], 'north']],
  ['west', [[-1, 0], 'east']],
  ['east', [[+1, 0], 'west']],
]);

export const connections = new Map([
  ['|', new Set(['north', 'south'])],
  ['-', new Set(['west', 'east'])],
  ['L', new Set(['north', 'east'])],
  ['J', new Set(['north', 'west'])],
  ['7', new Set(['south', 'west'])],
  ['F', new Set(['south', 'east'])],
  ['S', new Set(['north', 'east', 'south', 'west'])],
]);

export function findNextPositions([x, y], map) {
  const nextPositions = [];

  const connectedDirs = connections.get(map[y][x]);

  for (const dir of connectedDirs) {
    const [[incX, incY], oppositeDir] = dirs.get(dir);
    const adjacentX = x + incX;
    const adjacentY = y + incY;
    const adjacentTile = map[adjacentY]?.[adjacentX];

    if (
      !adjacentTile ||
      adjacentTile === '.' ||
      !connections.get(adjacentTile).has(oppositeDir)
    ) {
      continue;
    }

    nextPositions.push([adjacentX, adjacentY]);
  }

  return nextPositions;
}
