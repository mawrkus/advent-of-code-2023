import path from 'path';
import { getDayFolderPath } from './helpers/getDayFolderPath.js';
import { parseDayNumber } from './helpers/parseDayNumber.js';

const dayNumber = parseDayNumber();
const dayFolderPath = getDayFolderPath(dayNumber);

const [, , , puzzleNumber] = process.argv;

const filePath = path.join(dayFolderPath, `puzzle${puzzleNumber}.js`);

import(filePath)
	.then(() => {})
	.catch(() =>
		console.error(
			`Script ${filePath} not found!\n\nHave you started the day ${dayNumber}?\n`
		)
	);
