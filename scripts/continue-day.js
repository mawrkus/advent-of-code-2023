import { buildFilesForTheDay } from "./helpers/buildFilesForTheDay.js";
import { fetchPuzzle } from "./helpers/fetchPuzzle.js";
import { getDayFolderPath } from "./helpers/getDayFolderPath.js";
import { parseDayNumber } from "./helpers/parse.js";
import { addStar } from "./helpers/addStar.js";

const dayNumber = parseDayNumber();
const dayFolderPath = getDayFolderPath(dayNumber);

addStar(dayNumber);
console.log("Yes!! 🎉\n");

fetchPuzzle(dayNumber, 2)
  .then((puzzleInfo) => buildFilesForTheDay(dayFolderPath, puzzleInfo))
  .then(() => console.log("Good luck for part two!! :D\n"));
