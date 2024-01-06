const dirs = {
  north: [0, -1],
  west: [-1, 0],
  south: [0, +1],
  east: [+1, 0],
};

export function tilt(dir, x, y, platform) {
  if (platform[y][x] !== 'O') {
    return;
  }

  const [incX, incY] = dirs[dir];

  while (platform[y + incY]?.[x + incX] === '.') {
    platform[y + incY][x + incX] = 'O';
    platform[y][x] = '.';

    y += incY;
    x += incX;
  }
}
