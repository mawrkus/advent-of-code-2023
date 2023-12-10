import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.ADVENT_COOKIE) {
  throw new Error("Don't forget the cookies! ;)");
}

export function fetchInput(dayNumber) {
  return fetch(`https://adventofcode.com/2023/day/${dayNumber}/input`, {
    headers: {
      cookie: process.env.ADVENT_COOKIE,
      "user-agent": "mawrkus/1.0, an automated bot created by @crossrecursion",
      "x-thanks": "thank you for building Advent of Code, I owe you my life!",
    },
  }).then((response) => response.text());
}

export function postInput(dayNumber, puzzleNumber, answer) {
  console.log(
    'Posting answer "%s" for day %s puzzle %s...',
    answer,
    dayNumber,
    puzzleNumber
  );

  return fetch(`https://adventofcode.com/2023/day/${dayNumber}/answer`, {
    method: "POST",
    form: { answer, level: puzzleNumber },
    headers: {
      cookie: process.env.ADVENT_COOKIE,
      "user-agent": "mawrkus/1.0, an automated bot created by @crossrecursion",
      "x-thanks": "thank you for building Advent of Code, I owe you my life!",
    },
  }).then((response) => response.text());
}
