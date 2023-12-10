import { postInput } from "./helpers/input.js";
import { parseDayNumber, parsePuzzleNumber } from "./helpers/parse.js";

const dayNumber = parseDayNumber();
const puzzleNumber = parsePuzzleNumber();

const [, , , , answer] = process.argv;

// TOOD: make it work
postInput(dayNumber, puzzleNumber, answer).then((response) =>
  console.log(response)
);
