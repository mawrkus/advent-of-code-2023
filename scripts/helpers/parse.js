export function parseDayNumber() {
  const [, , rawDayNumber] = process.argv;

  const dayNumber = Number(rawDayNumber);

  if (Number.isNaN(dayNumber) || dayNumber < 1 || dayNumber > 25) {
    throw new Error(
      `${dayNumber} is not a valid day number (received "${dayNumber}")!`
    );
  }

  return dayNumber;
}

export function parsePuzzleNumber() {
  const [, , , rawPuzzleNumber] = process.argv;

  const puzzleNumber = Number(rawPuzzleNumber);

  if (Number.isNaN(puzzleNumber) || puzzleNumber < 1 || puzzleNumber > 2) {
    throw new Error(
      `${puzzleNumber} is not a valid puzzle number (received "${puzzleNumber}")!`
    );
  }

  return puzzleNumber;
}
