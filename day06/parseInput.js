export function parseInput(textInput, log = true, puzzleNumber = 1) {
  const [timeLine, distanceLine] = textInput.trim().split('\n');

  let rawTimes = timeLine.matchAll(/\d+/g);
  let rawDistances = distanceLine.matchAll(/\d+/g);

  if (puzzleNumber === 2) {
    rawTimes = [[[...rawTimes].join('')]];
    rawDistances = [[[...rawDistances].join('')]];
  }

  let input = [];

  const times = [...rawTimes].map(([t]) => Number(t));
  const distances = [...rawDistances].map(([t]) => Number(t));

  for (let i = 0; i < times.length; i += 1) {
    input[i] = { totalTime: times[i], maxDistance: distances[i] };
  }

  if (log) {
    console.log(input);
  }

  return input;
}
