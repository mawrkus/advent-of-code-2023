export function parseInput(textInput, log = true) {
  const input = textInput.trim().replace(/\n/g, '').split(',');

  const parsed = input.map((step) => {
    const [, label, operation, rawFocalLength] = step.match(
      /([^-=]+)(-|=)([0-9]+)?/
    );

    return {
      step,
      label,
      operation,
      focalLength: rawFocalLength ? Number(rawFocalLength) : null,
    };
  });

  if (log) {
    console.log(parsed);
  }

  return parsed;
}
