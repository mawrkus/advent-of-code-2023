export function displayPlatform(platform) {
  console.log(
    platform
      .map((line) => line.join('').replace(/O/g, '\u001b[38;5;15mO\u001b[0m'))
      .join('\n')
  );
  console.log();
}
