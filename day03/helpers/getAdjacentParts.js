const partsCoords = {
  _store: new Set(),
  has(x, y) {
    return this._store.has(`${x},${y}`);
  },
  add(x, y) {
    this._store.add(`${x},${y}`);
  },
};

const isDigit = (char) => /\d/.test(char);

const parseNumber = (posX, posY, input) => {
  const line = input[posY];
  let rawNumber = "";
  let x = posX;

  while (isDigit(line[--x]));

  while (isDigit(line[++x])) {
    rawNumber += line[x];
    partsCoords.add(x, posY);
  }

  return Number(rawNumber);
};

const adjacentPositions = [
  [-1, -1],
  [-1, 0],
  [-1, +1],
  [0, -1],
  [0, +1],
  [+1, -1],
  [+1, 0],
  [+1, +1],
];

export const getAdjacentParts = (input, x, y) => {
  const partNumbers = [];

  for (const [incX, incY] of adjacentPositions) {
    const posX = x + incX;
    const posY = y + incY;

    if (!partsCoords.has(posX, posY) && isDigit(input[posY][posX])) {
      partNumbers.push(parseNumber(posX, posY, input));
    }
  }

  return partNumbers;
};
