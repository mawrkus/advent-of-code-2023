import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

export function fetchInput(dayNumber, partNumber) {
	dotenv.config();

	if (!process.env.ADVENT_COOKIE) {
		throw new Error("Don't forget the cookies! ;)");
	}

	return fetch(`https://adventofcode.com/2023/day/${dayNumber}/input`, {
		headers: {
			cookie: process.env.ADVENT_COOKIE,
			'user-agent': 'mawrkus/1.0',
			'x-whomai': 'just an automated bot created by @crossrecursion',
			'x-purpose':
				"fetching the puzzles description of the day to generate a nice README file for my creator's repo in GitHub",
			'x-thanks': 'thank you for building Advent of Code, I owe you my life!',
		},
	}).then((response) => response.text());
}
