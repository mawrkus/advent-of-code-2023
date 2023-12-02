import path from 'path';
import fs from 'fs';
import { fetchInput } from './helpers/fetchInput.js';
import { getDayFolderPath } from './helpers/getDayFolderPath.js';
import { parseDayNumber } from './helpers/parseDayNumber.js';

const dayNumber = parseDayNumber();
const dayFolderPath = getDayFolderPath(dayNumber);

fetchInput(dayNumber, 1)
	.then((input) => createInputFile(dayFolderPath, input))
	.then(() => console.log('⚡️ Input fetched!\n'));

function createInputFile(dayFolderPath, input) {
	const fileContent = `export default \`
${input.trim()}
\`;
`;

	fs.writeFileSync(path.join(dayFolderPath, 'input.js'), fileContent, {
		encoding: 'utf-8',
	});
}
