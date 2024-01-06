import { parseInput } from './parseInput.js';
// import textInput from './sample.js';
import textInput from './input.js';

import { hash } from './helper/hash.js';

function computeFocusingPower(boxes) {
  let focusingPower = 0;

  for (const [box, items] of boxes.entries()) {
    focusingPower += items.reduce(
      (acc, { focalLength }, slotNumber) =>
        acc + (box + 1) * (slotNumber + 1) * focalLength,
      0
    );
  }

  return focusingPower;
}

function solve(sequence) {
  let output = 0;

  const boxes = new Map();

  for (const { label, operation, focalLength } of sequence) {
    const boxNumber = hash(label);

    if (operation === '-') {
      if (boxes.has(boxNumber)) {
        const items = boxes
          .get(boxNumber)
          .filter((item) => item.label !== label);

        boxes.set(boxNumber, items);
      }

      continue;
    }

    if (operation === '=') {
      const items = boxes.get(boxNumber) || [];
      const existingItem = items.find((item) => item.label === label);

      if (existingItem) {
        existingItem.focalLength = focalLength;
      } else {
        items.push({ label, focalLength });
        boxes.set(boxNumber, items);
      }

      continue;
    }
  }

  output = computeFocusingPower(boxes);

  return output;
}

const output = solve(parseInput(textInput));

console.log('→', output);
