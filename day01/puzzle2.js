import { parseInput } from './parseInput.js';
// import textInput from './sample2.js';
import textInput from './input.js';

const lookup = {
	one: '1',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9',
};

const reverse = (str) => str.split('').reverse().join('');

const reverseLookup = Object.entries(lookup).reduce(
	(acc, [key, value]) => ({ ...acc, [reverse(key)]: value }),
	{}
);

function solve(input) {
	const firstRegex = new RegExp(`(\[1-9]|${Object.keys(lookup).join('|')})`);

	const lastRegex = new RegExp(
		`(\[1-9]|${Object.keys(reverseLookup).join('|')})`
	);

	let output = 0;

	for (const line of input) {
		const [, first] = line.match(firstRegex);
		const [, last] = reverse(line).match(lastRegex);

		output += Number((lookup[first] || first) + (reverseLookup[last] || last));
	}

	return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
