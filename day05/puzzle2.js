import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

function getSeedRanges(seeds) {
  const seedRanges = [];

  do {
    const [lowest, range] = seeds.splice(0, 2);
    seedRanges.push([lowest, lowest + range - 1]);
  } while (seeds.length);

  return seedRanges;
}

function applyMapping(ranges, mapping) {
  const mapped = [];
  const notMapped = [];

  const { lowSource, highSource, convert } = mapping;

  for (const [low, high] of ranges) {
    // seed                   L···H
    // seed   L···H
    // source         L····H
    if (low > highSource || high < lowSource) {
      notMapped.push([low, high]);
      continue;
    }

    // seed   L·······H
    // seed     L···H
    // source L·······H
    if (low >= lowSource && high <= highSource) {
      mapped.push([convert(low), convert(high)]);
      continue;
    }

    // seed   L········H
    // source   L···H
    if (low < lowSource && high > highSource) {
      notMapped.push([low, lowSource - 1]);
      mapped.push([convert(lowSource), convert(highSource)]);
      notMapped.push([highSource + 1, high]);
      continue;
    }

    // seed   L·········H
    // seed   L······H
    // seed   L···H
    // source     L·····H
    if (low < lowSource && high >= lowSource && high <= highSource) {
      notMapped.push([low, lowSource - 1]);
      mapped.push([convert(lowSource), convert(high)]);
      continue;
    }

    // seed     L··········H
    // seed        L·······H
    // seed           L····H
    // source   L·····H
    if (high > highSource && low >= lowSource && low <= highSource) {
      mapped.push([convert(low), convert(highSource)]);
      notMapped.push([highSource + 1, high]);
      continue;
    }

    throw new Error("Ooops! Shouldn't be here.");
  }

  return {
    mapped,
    notMapped,
  };
}

function applyAllMappings(seedRange, mapGroups) {
  let notMapped = [seedRange];

  for (const mappings of mapGroups) {
    let mapped = [];

    for (const mapping of mappings) {
      const results = applyMapping(notMapped, mapping);

      mapped.push(...results.mapped);
      notMapped = results.notMapped;
    }

    notMapped = [...mapped, ...notMapped];
  }

  return notMapped;
}

function solve(input) {
  let output = Infinity;

  const { seeds, mapGroups } = input;

  const seedRanges = getSeedRanges(seeds);

  for (const seedRange of seedRanges) {
    const mappedRanges = applyAllMappings(seedRange, mapGroups);

    const [[lowest]] = mappedRanges.sort(([lowA], [lowB]) => lowA - lowB);

    output = Math.min(output, lowest);
  }

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
