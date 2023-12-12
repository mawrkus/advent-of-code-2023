export function shiftPositions(positions, shiftsX, shiftsY, factor = 2) {
  const shiftedPositions = [];

  for (const pos of positions) {
    const [x, y] = pos;

    const lastShiftXIndex = shiftsX.findLastIndex((n) => n < x);
    const lastShiftYIndex = shiftsY.findLastIndex((n) => n < y);

    const newPos = [
      x + (lastShiftXIndex > -1 ? (lastShiftXIndex + 1) * (factor - 1) : 0),
      y + (lastShiftYIndex > -1 ? (lastShiftYIndex + 1) * (factor - 1) : 0),
    ];

    shiftedPositions.push(newPos);
  }

  return shiftedPositions;
}
