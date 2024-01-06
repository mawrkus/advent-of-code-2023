export function displayPattern(pattern, { top, left }) {
  console.log(
    pattern
      .map((line) => line.replace(/#/g, '\u001b[38;5;15mX\u001b[0m'))
      .join('\n')
  );

  console.log('[%dx%d]\n', pattern[0].length, pattern.length);
  console.log('→ top', top);
  console.log('→ left', left);
  console.log();
}
